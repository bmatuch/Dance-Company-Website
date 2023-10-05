import React, { useEffect, useState } from "react";

export default function OfficersCollapse({ data, onChildClick }) {
  return (
    <div>
      <button onClick="onChildClick" class="collapsible">
        {data}
      </button>
    </div>
  );
}
