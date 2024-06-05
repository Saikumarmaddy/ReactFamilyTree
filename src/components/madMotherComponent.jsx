import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Polamarasetty Pydi Naidu - Seetha Ramulu" },
    position: { x: 1300, y: 5 },
    className: "light",
    style: {
      width: 300,
    },
  },
  {
    id: "2",
    data: { label: "Alla Adiyamma Clan" },
    position: { x: -500, y: 100 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: 595,
      height: 260,
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  {
    id: "2a",
    data: { label: "Alla Adiyamma - Alla Lakshmi Narayana" },
    position: { x: 175, y: 50 },
    parentId: "2",
    extent: "parent",
    style: {
      width: 240,
      height: 50,
    },
  },
  {
    id: "2a-one",
    data: { label: "Alla Vishweswara Rao - Nookaratnam" },
    position: { x: -110, y: 100 },
    parentId: "2a",
  },
  {
    id: "2a-two",
    data: { label: "Polamarasetty Adi Lakshmi - Subbarao" },
    position: { x: 180, y: 100 },
    parentId: "2a",
    style: {
      width: 170,
      height: 50,
    },
  },
  {
    id: "3",
    data: { label: "ChinnaTalli Clan" },
    position: { x: 100, y: 100 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: 3020,
      height: 260,
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  {
    id: "3a",
    data: { label: "ChinnaTalli - Appala Naidu" },
    position: { x: 1250, y: 50 },
    parentId: "3",
    extent: "parent",
    style: {
      width: 240,
    },
  },
  {
    id: "3a-one",
    data: { label: "Saragadam Poornamma - Suri Apparao" },
    position: { x: -1100, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-five",
    data: { label: "JaggaRao - Siva Lakshmi" },
    position: { x: -500, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-two",
    data: { label: "Paapa - MahaLakshmi Naidu" },
    position: { x: 0, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-three",
    data: { label: "KrishnaRao - Manga" },
    position: { x: 850, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "3a-four",
    data: { label: "Nookeshwara Rao - Ramanamma" },
    position: { x: 1400, y: 100 },
    parentId: "3a",
    style: {
      width: 300,
    },
  },
  {
    id: "4",
    data: { label: "Polamarasetty Surya Narayana Clan" },
    position: { x: 3125, y: 100 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: 763,
      height: 260,
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  {
    id: "4a",
    data: { label: "Polamarasetty Surya Narayana - Lakshmi" },
    position: { x: 280, y: 50 },
    parentId: "4",
    style: {
      width: 230,
      height: 50,
    },
    extent: "parent",
  },
  {
    id: "4h",
    position: { x: 3125, y: 500 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      width: 763,
      height: 230,
    },
  },
  {
    id: "4a-one",
    data: { label: "XXXX -Varalakshmi" },
    position: { x: -140, y: 400 },
    parentId: "4a",
  },
  {
    id: "4a-two",
    data: { label: "Srinu - XXXX" },
    position: { x: 200, y: 400 },
    parentId: "4a",
  },

  {
    id: "5",
    data: { label: "Polamarasetty SubbaRao Clan" },
    position: { x: 3893, y: 100 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: 1100,
      height: 260,
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  {
    id: "5a",
    data: { label: "Polamarasetty SubbaRao - Adi Lakshmi" },
    position: { x: 420, y: 50 },
    parentId: "5",
    style: {
      width: 230,
      height: 50,
    },
    extent: "parent",
  },
  {
    id: "5h",
    position: { x: 3893, y: 500 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      width: 1100,
      height: 230,
    },
  },
  {
    id: "5a-one",
    data: { label: "Maddala BhuLakshmi - Satyanarayana" },
    position: { x: -250, y: 400 },
    parentId: "5a",
  },
  {
    id: "5a-two",
    data: { label: "Saragadam Parameswari - Koti Apparao" },
    position: { x: -60, y: 400 },
    parentId: "5a",
    style: {
      width: 155,
      height: 50,
    },
  },
  {
    id: "5a-three",
    data: { label: "Alla Uma Seshu - Govindh" },
    position: { x: 150, y: 400 },
    parentId: "5a",
  },
  {
    id: "5a-four",
    data: { label: "MohanRao - Sowjanya Lakshmi" },
    position: { x: 340, y: 400 },
    parentId: "5a",
    style: {
      width: 180,
      height: 50,
    },
  },
  {
    id: "6",
    position: { x: -500, y: 500 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      width: 595,
      height: 230,
    },
  },
  {
    id: "6a",
    data: { label: "Alla Sri Rama Chandra Murthy - Alla PushpaLatha" },
    position: { x: 165, y: 50 },
    parentId: "6",
    extent: "parent",
    style: {
      width: 240,
      height: 50,
    },
  },
  {
    id: "6a-one",
    data: { label: "Alla Sai Vinay Kumar" },
    position: { x: -80, y: 100 },
    parentId: "6a",
  },
  {
    id: "6a-two",
    data: { label: "Alla Jayanth Vijay" },
    position: { x: 160, y: 100 },
    parentId: "6a",
    style: {
      width: 170,
    },
  },
  {
    id: "3h",
    position: { x: 100, y: 500 },
    className: "light",
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      width: 3020,
      height: 230,
    },
  },
  {
    id: "3a-one-a",
    data: { label: "Saragadam Ravi - Chinnari" },
    position: { x: 200, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-one-b",
    data: { label: "Saragadam Satti - Lakshmi" },
    position: { x: 600, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-one-a-a",
    data: { label: "Jyothi" },
    position: { x: -180, y: 100 },
    parentId: "3a-one-a",
  },
  {
    id: "3a-one-a-b",
    data: { label: "Kusuma" },
    position: { x: 0, y: 100 },
    parentId: "3a-one-a",
  },
  {
    id: "3a-one-a-c",
    data: { label: "Shyam" },
    position: { x: 180, y: 100 },
    parentId: "3a-one-a",
  },
  {
    id: "3a-one-b-a",
    data: { label: "Sowjanya" },
    position: { x: -50, y: 100 },
    parentId: "3a-one-b",
  },
  {
    id: "3a-one-b-b",
    data: { label: "Bhanu" },
    position: { x: 120, y: 100 },
    parentId: "3a-one-b",
  },
  {
    id: "3a-two-a",
    data: { label: "Chinnari - Ravi" },
    position: { x: 800, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-a",
    data: { label: "Ramudu - XXXX" },
    position: { x: 1100, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-b",
    data: { label: "Mohan - XXXX" },
    position: { x: 1400, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-c",
    data: { label: "Dhana - XXXX" },
    position: { x: 1700, y: 50 },
    parentId: "3h",
    extent: "parent",
  },
  {
    id: "3a-three-a-a",
    data: { label: "XXXXS" },
    position: { x: -160, y: 100 },
    parentId: "3a-three-a",
  },
  {
    id: "3a-three-a-b",
    data: { label: "XXXXS" },
    position: { x: 30, y: 100 },
    parentId: "3a-three-a",
  },
  {
    id: "3a-three-b-a",
    data: { label: "XXXX" },
    position: { x: -100, y: 100 },
    parentId: "3a-three-b",
  },
  {
    id: "3a-three-b-b",
    data: { label: "XXXX" },
    position: { x: 80, y: 100 },
    parentId: "3a-three-b",
  },
  {
    id: "3a-three-c-a",
    data: { label: "XXXXCA" },
    position: { x: -50, y: 100 },
    parentId: "3a-three-c",
  },
  {
    id: "3a-three-c-b",
    data: { label: "XXXXCB" },
    position: { x: 120, y: 100 },
    parentId: "3a-three-c",
  },
  {
    id: "3a-four-a",
    data: { label: "Murali" },
    position: { x: -100, y: 400 },
    parentId: "3a-three",
  },
  {
    id: "3a-four-b",
    data: { label: "Sunitha" },
    position: { x: 80, y: 400 },
    parentId: "3a-three",
  },
  {
    id: "3a-four-c",
    data: { label: "Venkatesh" },
    position: { x: 280, y: 400 },
    parentId: "3a-three",
  },
  {
    id: "3a-five-a",
    data: { label: "NageshwaraRao" },
    position: { x: -50, y: 400 },
    parentId: "3a-four",
  },
  {
    id: "3a-five-b",
    data: { label: "Jagadeesh" },
    position: { x: 200, y: 400 },
    parentId: "3a-four",
  },
  {
    id: "4a-one-a",
    data: { label: "Kasi" },
    position: { x: -130, y: 100 },
    parentId: "4a-one",
  },
  {
    id: "4a-one-b",
    data: { label: "XXXX" },
    position: { x: 90, y: 100 },
    parentId: "4a-one",
  },
  {
    id: "4a-two-a",
    data: { label: "XXXX" },
    position: { x: -70, y: 100 },
    parentId: "4a-two",
  },
  {
    id: "4a-two-b",
    data: { label: "XXXX" },
    position: { x: 120, y: 100 },
    parentId: "4a-two",
  },
  {
    id: "5a-one-a",
    data: { label: "Sowjanya Lakshmi" },
    position: { x: -100, y: 100 },
    parentId: "5a-one",
  },
  {
    id: "5a-one-b",
    data: { label: "Sai Kumar" },
    position: { x: 100, y: 100 },
    parentId: "5a-one",
  },
  {
    id: "5a-three-a",
    data: { label: "Bhuvana Dattu" },
    position: { x: -80, y: 100 },
    parentId: "5a-three",
  },
  {
    id: "5a-four-a",
    data: { label: "Greeshma Vadan" },
    position: { x: -170, y: 300 },
    parentId: "5a-four",
  },
  {
    id: "5a-four-b",
    data: { label: "Nihaar" },
    position: { x: 170, y: 300 },
    parentId: "5a-four",
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-2a-one",
    source: "2a",
    target: "2a-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-2a-two",
    source: "2a",
    target: "2a-two",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
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
    id: "e1-4",
    source: "1",
    target: "4",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-4a-one",
    source: "4a",
    target: "4a-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-4a-two",
    source: "4a",
    target: "4a-two",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-relation",
    source: "2a-two",
    target: "5a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-one",
    source: "5a",
    target: "5a-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-two",
    source: "5a",
    target: "5a-two",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-three",
    source: "5a",
    target: "5a-three",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-four",
    source: "5a",
    target: "5a-four",
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
    id: "e1-6",
    source: "2a-one",
    target: "6a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-6a-one",
    source: "6a",
    target: "6a-one",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-6a-two",
    source: "6a",
    target: "6a-two",
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
    id: "e1-3a-one-a-c",
    source: "3a-one-a",
    target: "3a-one-a-c",
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
    id: "e1-3a-one-b-b",
    source: "3a-one-b",
    target: "3a-one-b-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-a",
    source: "3a-five",
    target: "3a-two-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-a",
    source: "3a-two",
    target: "3a-three-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-b",
    source: "3a-two",
    target: "3a-three-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-c",
    source: "3a-two",
    target: "3a-three-c",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-two-a-relation",
    source: "3a-two-a",
    target: "3a-one-a",
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
    id: "e1-3a-three-c-a",
    source: "3a-three-c",
    target: "3a-three-c-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-3a-three-c-b",
    source: "3a-three-c",
    target: "3a-three-c-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-a",
    source: "3a-three",
    target: "3a-four-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-b",
    source: "3a-three",
    target: "3a-four-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-four-c",
    source: "3a-three",
    target: "3a-four-c",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-a",
    source: "3a-four",
    target: "3a-five-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-five-b",
    source: "3a-four",
    target: "3a-five-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-4a-one-a",
    source: "4a-one",
    target: "4a-one-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-4a-one-b",
    source: "4a-one",
    target: "4a-one-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-4a-two-a",
    source: "4a-two",
    target: "4a-two-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-4a-two-b",
    source: "4a-two",
    target: "4a-two-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-one-a",
    source: "5a-one",
    target: "5a-one-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-one-b",
    source: "5a-one",
    target: "5a-one-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-three-a",
    source: "5a-three",
    target: "5a-three-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-four-a",
    source: "5a-four",
    target: "5a-four-a",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-four-b",
    source: "5a-four",
    target: "5a-four-b",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
  {
    id: "e1-5a-one-a-relation",
    source: "5a-one-a",
    target: "5a-four",
    style: {
      strokeWidth: 0.5,
      stroke: "#000000",
    },
  },
];

export default function MadMotherComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
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
