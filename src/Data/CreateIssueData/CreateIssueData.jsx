// const createIssueStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "50rem",
//     height: "50rem",
//   },
// };
const createIssueStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50rem",
    height: "50rem",
    "box-shadow": "-1px 0 5px 0",
    "min-width": "10%",
    "max-width": "50%",
    "max-height": "100%",
  },
};

const options = [
  { value: "Task", label: "Task" },
  { value: "Bug", label: "Bug" },
  { value: "Story", label: "Story" },
];

const Priority = [
  { value: "Urgent", label: "Urgent" },
  { value: "High", label: "High" },
  { value: "Normal", label: "Normal" },
  { value: "Low", label: "Low" },
];

export { options, Priority, createIssueStyles };
