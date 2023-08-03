import React, { useEffect, useState } from "react";
import "./Board.css";
import BoardSingleData from "../BoardSingleData/BoardSingleData";
export default function Board({
  latest,
  requirement,
  proposal,
  demo,
  client,
  invoiced,
  rejected,
  cancelled,
  checked,
}) {
  console.log(checked, "checkek");

  return (
    <>
      <div className="flex overflow-x-auto selector mx-5">
        {checked.latest && <BoardSingleData name={"New"} value={latest} />}

        {checked.requirement && (
          <BoardSingleData
            name={"Requirement Collection"}
            value={requirement}
          />
        )}

        {checked.proposal && (
          <BoardSingleData name={"Proposal"} value={proposal} />
        )}
        {checked.demo && <BoardSingleData name={"Demo"} value={demo} />}
        {checked.client && <BoardSingleData name={"Client"} value={client} />}
        {checked.invoiced && (
          <BoardSingleData name={"Invoiced"} value={invoiced} />
        )}
        {checked.rejected && (
          <BoardSingleData name={"Rejected"} value={rejected} />
        )}
        {checked.cancelled && (
          <BoardSingleData name={"Cancelled"} value={cancelled} />
        )}
      </div>
    </>
  );
}
