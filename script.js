function addTicket() {
  const userName = document.getElementById("userName").value;
  const issueType = document.getElementById("issueType").value;
  const priority = document.getElementById("priority").value;
  const status = document.getElementById("status").value;
  const notes = document.getElementById("notes").value;

  const table = document.getElementById("ticketTable");
  const row = table.insertRow();

  row.insertCell(0).innerText = userName;
  row.insertCell(1).innerText = issueType;
  row.insertCell(2).innerText = priority;
  row.insertCell(3).innerText = status;
  row.insertCell(4).innerText = notes;

  document.getElementById("userName").value = "";
  document.getElementById("issueType").value = "";
  document.getElementById("priority").value = "Low";
  document.getElementById("status").value = "Open";
  document.getElementById("notes").value = "";
}
