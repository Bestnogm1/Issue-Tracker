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
    boxShadow: "-1px 0 5px 0",
    minWidth: "10%",
    maxWidth: "50%",
    maxHeight: "100%",
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
