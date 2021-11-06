
let data;
if (JSON.parse(localStorage.getItem("checkinData"))) {
  data = JSON.parse(localStorage.getItem("checkinData"))
} else { data = {} };

const DateString = (date) => {
  return `${date[0]} ${date[1]}, ${date[2]}`
};

const DateStringProp = (date) => {

  return `${date[0]}${date[1]}${date[2]}`
}

const GetDate = (date, format) => {
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  if (!format) {
    return [Months[month], day, year]
  }
};

const UpdateStorage = () => {


  data[DateController.DateStringProp(date)] = DateController.GetDate();
  localStorage.setItem("checkinData", JSON.stringify(data))
}

const checkinContainer = document.getElementById("calendarBody");

const CreateCheckinButton = () => {
  const buttonBody = document.createElement("div");
  buttonBody.textContent = "Click to Check In";
  buttonBody.classList.add("checkinButton");
  buttonBody.addEventListener("click", (x) => {
    Checkin(date);
    UpdateStorage();
    x.target.remove();
  });
  document.querySelector("body").appendChild(buttonBody);
}

const Checkin = (date) => {
  const checkinBadge = document.createElement("div");
  checkinBadge.classList.add(`checkinBadge`);
  checkinBadge.textContent = DateString(date);
  checkinContainer.appendChild(checkinBadge);
}

const DateController = { "DateString": DateString, "DateStringProp": DateStringProp, "GetDate": GetDate };

const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let today = new Date;

let date = GetDate(today);
// const change = () => {
//   today.setDate(8);
//   date = GetDate(today);
// };
// change();

const initPage = () => {

};


if (!data.hasOwnProperty(DateStringProp(date))) {
  CreateCheckinButton();
}

for (const x in data) {
  Checkin(data[x]);
}
