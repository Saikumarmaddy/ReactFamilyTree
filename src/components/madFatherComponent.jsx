import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "3",
    data: { label: "Alla Venkata Ramana Clan" },
    position: { x: 100, y: 100 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: 4100,
      height: 260,
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  {
    id: "3a",
    data: { label: "Alla Venkata Ramana - Jogulamma/Gangayamma" },
    position: { x: 1450, y: 50 },
    parentId: "3",
    extent: "parent",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-one",
    data: { label: "Venkata Surya Narayana - Nookaratnam" },
    position: { x: -1100, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-five",
    data: { label: "Maddala Adi Lakshmi - Lakshmi Narayana" },
    position: { x: -500, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-two",
    data: { label: "Veeru Naidu - Jaya Lakshmi/Dhana Lakshmi" },
    position: { x: 550, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-three",
    data: { label: "Polamarasetty Jogulamama - Venkata Ramana" },
    position: { x: 1350, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-four",
    data: { label: "Suribabu - Padmavathi" },
    position: { x: 2150, y: 100 },
    parentId: "3a",
  },
  {
    id: "3h",
    position: { x: 100, y: 500 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      width: 4100,
      height: 260,
    },
  },
  {
    id: "3a-one-c",
    data: { label: "Malla Venkata Ratnam - MalleswaraRao" },
    position: { x: 120, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-one-a",
    data: { label: "NageshwarRao - Bharathi" },
    position: { x: 380, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-one-b",
    data: { label: "Boddeda Dhana Lakshmi - NookaRaju" },
    position: { x: 600, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-one-c-a",
    data: { label: "Bharathi" },
    position: { x: -100, y: 100 },
    parentId: "3a-one-c",
  },
  {
    id: "3a-one-c-b",
    data: { label: "Sri Lakshmi" },
    position: { x: 70, y: 100 },
    parentId: "3a-one-c",
  },
  {
    id: "3a-one-c-b-one",
    data: { label: "XXXX" },
    position: { x: -130, y: 300 },
    parentId: "3a-one-c-b",
  },
  {
    id: "3a-one-c-b-two",
    data: { label: "XXXX" },
    position: { x: 130, y: 300 },
    parentId: "3a-one-c-b",
  },
  {
    id: "3a-one-a-a",
    data: { label: "Ganesh" },
    position: { x: -30, y: 100 },
    parentId: "3a-one-a",
  },
  {
    id: "3a-one-a-b",
    data: { label: "Pranitha" },
    position: { x: 130, y: 100 },
    parentId: "3a-one-a",
  },
  {
    id: "3a-one-b-a",
    data: { label: "Lohith" },
    position: { x: 100, y: 100 },
    parentId: "3a-one-b",
  },
  {
    id: "3a-two-a",
    data: { label: "Prasad - Nagamani" },
    position: { x: 1500, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-two-b",
    data: { label: "Sudhakar - Bharathi" },
    position: { x: 1750, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-two-b-a",
    data: { label: "Deekshita" },
    position: { x: -100, y: 100 },
    parentId: "3a-two-b",
  },
  {
    id: "3a-two-b-b",
    data: { label: "Chetan" },
    position: { x: 60, y: 100 },
    parentId: "3a-two-b",
  },
  {
    id: "3a-two-c",
    data: { label: "Ramanaji - Kusuma" },
    position: { x: 2050, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-two-c-a",
    data: { label: "XXXX" },
    position: { x: -50, y: 100 },
    parentId: "3a-two-c",
  },
  {
    id: "3a-two-c-b",
    data: { label: "XXXX" },
    position: { x: 110, y: 100 },
    parentId: "3a-two-c",
  },
  {
    id: "3a-two-d",
    data: { label: "Dadi Jayasri - Apparao" },
    position: { x: 2350, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-a",
    data: { label: "SomeswarRao - Nirmala" },
    position: { x: 2650, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-b",
    data: { label: "Rajesh - Lalitha" },
    position: { x: 3150, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-a-a",
    data: { label: "Nishkala" },
    position: { x: -100, y: 100 },
    parentId: "3a-three-a",
  },
  {
    id: "3a-three-a-b",
    data: { label: "Nihal" },
    position: { x: 100, y: 100 },
    parentId: "3a-three-a",
  },
  {
    id: "3a-three-b-a",
    data: { label: "Hemanya" },
    position: { x: -100, y: 100 },
    parentId: "3a-three-b",
  },
  {
    id: "3a-three-b-b",
    data: { label: "Ujwala" },
    position: { x: 100, y: 100 },
    parentId: "3a-three-b",
  },
  {
    id: "3a-four-a",
    data: { label: "Polamarasetty Lalitha - Rajesh" },
    position: { x: 3450, y: 50 },
    parentId: "3h",
    extent: "parent",
    style: {
      width: 200,
    },
  },
  {
    id: "3a-four-b",
    data: { label: "Vasanth - Sri Lakshmi" },
    position: { x: 3750, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-four-b-a",
    data: { label: "Jeevan Arya" },
    position: { x: -70, y: 100 },
    parentId: "3a-four-b",
  },
  {
    id: "3a-four-b-b",
    data: { label: "XXXX" },
    position: { x: 90, y: 100 },
    parentId: "3a-four-b",
  },
  {
    id: "3a-five-a",
    data: { label: "Satyanarayana - Bhulakshmi" },
    position: { x: 1100, y: 50 },
    parentId: "3h",
    extent: "parent",
    style: {
      width: 200,
    },
  },
  {
    id: "3a-five-a-a",
    data: { label: "Polamarasetty Sowjanya - MohanRao" },
    position: { x: -200, y: 100 },
    parentId: "3a-five-a",
    style: {
      width: 250,
    },
  },
  {
    id: "3a-five-a-a-one",
    data: { label: "Greeshma Vadan" },
    position: { x: -100, y: 300 },
    parentId: "3a-five-a-a",
  },
  {
    id: "3a-five-a-a-two",
    data: { label: "Nihaar" },
    position: { x: 170, y: 300 },
    parentId: "3a-five-a-a",
  },
  {
    id: "3a-five-a-b",
    data: { label: "Sai Kumar" },
    position: { x: 200, y: 100 },
    parentId: "3a-five-a",
  },
];

const initialEdges = [
  {
    id: "e1-3",
    source: "1",
    target: "3",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one",
    source: "3a",
    target: "3a-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two",
    source: "3a",
    target: "3a-two",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three",
    source: "3a",
    target: "3a-three",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-four",
    source: "3a",
    target: "3a-four",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-five",
    source: "3a",
    target: "3a-five",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-b-relation",
    source: "3a-one-c-a",
    target: "3a-one-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-a",
    source: "3a-one",
    target: "3a-one-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-b",
    source: "3a-one",
    target: "3a-one-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-c",
    source: "3a-one",
    target: "3a-one-c",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-a-a",
    source: "3a-one-a",
    target: "3a-one-a-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-a-b",
    source: "3a-one-a",
    target: "3a-one-a-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-b-a",
    source: "3a-one-b",
    target: "3a-one-b-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-c-a",
    source: "3a-one-c",
    target: "3a-one-c-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-c-b",
    source: "3a-one-c",
    target: "3a-one-c-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-c-b-one",
    source: "3a-one-c-b",
    target: "3a-one-c-b-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-one-c-b-two",
    source: "3a-one-c-b",
    target: "3a-one-c-b-two",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-a",
    source: "3a-two",
    target: "3a-two-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-b",
    source: "3a-two",
    target: "3a-two-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-c",
    source: "3a-two",
    target: "3a-two-c",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-d",
    source: "3a-two",
    target: "3a-two-d",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-b-a",
    source: "3a-two-b",
    target: "3a-two-b-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-b-b",
    source: "3a-two-b",
    target: "3a-two-b-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-c-a",
    source: "3a-two-c",
    target: "3a-two-c-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-c-b",
    source: "3a-two-c",
    target: "3a-two-c-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-a",
    source: "3a-three",
    target: "3a-three-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-b",
    source: "3a-three",
    target: "3a-three-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-a-a",
    source: "3a-three-a",
    target: "3a-three-a-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-a-b",
    source: "3a-three-a",
    target: "3a-three-a-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-b-a",
    source: "3a-three-b",
    target: "3a-three-b-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-b-b",
    source: "3a-three-b",
    target: "3a-three-b-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-four-a-relation",
    source: "3a-four-a",
    target: "3a-three-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-a",
    source: "3a-four",
    target: "3a-four-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-b",
    source: "3a-four",
    target: "3a-four-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-b-a",
    source: "3a-four-b",
    target: "3a-four-b-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-b-b",
    source: "3a-four-b",
    target: "3a-four-b-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-a",
    source: "3a-five",
    target: "3a-five-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-a-a-one",
    source: "3a-five-a-a",
    target: "3a-five-a-a-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-a-a-two",
    source: "3a-five-a-a",
    target: "3a-five-a-a-two",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-a-a",
    source: "3a-five-a",
    target: "3a-five-a-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-a-b",
    source: "3a-five-a",
    target: "3a-five-a-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
];

export default function MadFatherComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="bg-gradient-to-r from-[#54B4D3] to-[#14A44D]"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
}
