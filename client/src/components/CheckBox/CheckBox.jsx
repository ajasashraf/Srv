import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "../Board/Board";
export default function CheckBox() {
  const [status, setStatus] = useState([]);
  const [latest, setLatest] = useState([]);
  const [requirement, setRequirement] = useState([]);
  const [proposal, setProposal] = useState([]);
  const [demo, setDemo] = useState([]);
  const [client, setClient] = useState([]);
  const [invoiced, setInvoiced] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [cancelled, setCancelled] = useState([]);

  const [checked, setChecked] = useState({
    latest: false,
    requirement: false,
    proposal: false,
    demo: false,
    client: false,
    invoiced: false,
    rejected: false,
    cancelled: false,
  });

  useEffect(() => {
    axios
      .get("https://crmapi.srvinfotech.com/leads/leadsStatus")
      .then((response) => {
        setStatus(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching user details:", error);
      });
  }, []);

  const handleCheckboxChange = async (event, status) => {
    if (event) {
      const response = await axios.get(
        `https://crmapi.srvinfotech.com/newleads/list/kanban?from_date=2023-06-01&to_date=2023-07-12&followup_status=${status._id}`
      );

      if (status.name === "New") {
        if (response.data.data.length > 0) {
          setLatest(response.data.data[0].items);
        }
        setChecked((prevState) => ({
          ...prevState,
          latest: !prevState[latest],
        }));
      } else if (status.name === "Requirement Collection") {
        if (response.data.data.length > 0) {
          setRequirement(response.data.data[0].items);
        }
        setChecked((prevState) => ({
          ...prevState,
          requirement: !prevState[requirement],
        }));
      } else if (status.name === "Proposal") {
        if (response.data.data.length > 0) {
          setProposal(response.data.data[0].items);
        }

        setChecked((prevState) => ({
          ...prevState,
          proposal: !prevState[proposal],
        }));
      } else if (status.name === "Demo") {
        if (response.data.data.length > 0) {
          setDemo(response.data.data[0].items);
        }

        setChecked((prevState) => ({
          ...prevState,
          demo: !prevState[demo],
        }));
      } else if (status.name === "Client") {
        if (response.data.data.length > 0) {
          setClient(response.data.data[0].items);
        }
        setChecked((prevState) => ({
          ...prevState,
          client: !prevState[client],
        }));
      } else if (status.name === "Invoiced") {
        if (response.data.data.length > 0) {
          setInvoiced(response.data.data[0].items);
        }
        setChecked((prevState) => ({
          ...prevState,
          invoiced: !prevState[invoiced],
        }));
      } else if (status.name === "Rejected") {
        if (response.data.data.length > 0) {
          setRejected(response.data.data[0].items);
        }
        setChecked((prevState) => ({
          ...prevState,
          rejected: !prevState[rejected],
        }));
      } else if (status.name === "Cancelled") {
        if (response.data.data.length > 0) {
          setCancelled(response.data.data[0].items);
        }
        setChecked((prevState) => ({
          ...prevState,
          cancelled: !prevState[cancelled],
        }));
      }
    } else {
      if (status.name === "New") {
        setLatest([]);
        setChecked((prevState) => ({
          ...prevState,
          latest: false,
        }));
      } else if (status.name === "Requirement Collection") {
        setRequirement([]);
        setChecked((prevState) => ({
          ...prevState,
          requirement: false,
        }));
      } else if (status.name === "Proposal") {
        setProposal([]);
        setChecked((prevState) => ({
          ...prevState,
          proposal: false,
        }));
      } else if (status.name === "Demo") {
        setDemo([]);
        setChecked((prevState) => ({
          ...prevState,
          demo: false,
        }));
      } else if (status.name === "Client") {
        setClient([]);
        setChecked((prevState) => ({
          ...prevState,
          client: false,
        }));
      } else if (status.name === "Invoiced") {
        setInvoiced([]);
        setChecked((prevState) => ({
          ...prevState,
          invoiced: false,
        }));
      } else if (status.name === "Rejected") {
        setRejected([]);
        setChecked((prevState) => ({
          ...prevState,
          rejected: false,
        }));
      } else if (status.name === "Cancelled") {
        setCancelled([]);
        setChecked((prevState) => ({
          ...prevState,
          cancelled: false,
        }));
      }
    }
  };

  return (
    <>
      <div className="mt-0.5">
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex px-2 py-2">
          {status.map((statusList) => (
            <li key={statusList._id} className=" dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="Status"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  onClick={(e) =>
                    handleCheckboxChange(e.target.checked, statusList)
                  }
                />
                <label
                  htmlFor="Status-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black whitespace-nowrap"
                >
                  {statusList.name}
                </label>
              </div>
            </li>
          ))}
          <div className="flex w-full justify-end ">
            <input
              type="date"
              id="startDate"
              className="me-2 border border-gray-300 p-2 text-gray-900 dark:text-black"
            />
            <input
              type="date"
              id="endDate"
              className=" border border-gray-300 p-2 me-2 text-gray-900 dark:text-black"
            />
          </div>
        </ul>
      </div>

      <Board
        latest={latest}
        requirement={requirement}
        proposal={proposal}
        demo={demo}
        client={client}
        invoiced={invoiced}
        rejected={rejected}
        cancelled={cancelled}
        checked={checked}
      />
    </>
  );
}
