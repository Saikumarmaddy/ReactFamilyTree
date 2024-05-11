import React from "react";
import Tree from "react-d3-tree";
import "./famTree.css";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "ManagerOne-ItsAlly",
      children: [
        {
          name: "Testing",
          attributes: {
            department: "TestFabrication",
          },
          children: [
            {
              name: "Workers",
              attributes: {
                department: "Fabrication",
              },
            },
          ],
        },
        {
          name: "Foreman",
        },
      ],
    },
    {
      name: "ManagerTwo",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Workers",
              attributes: {
                department: "Fabrication",
              },
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Workers",
              attributes: {
                department: "Fabrication",
              },
            },
          ],
        },
      ],
    },
  ],
};

// const handleAddChildrenToNode = (nodeId, childrenData) => {
//   console.log(nodeId, childrenData);
// };

const straightPathFunc = (linkDatum, orientation) => {
  console.log(linkDatum);
  const { source, target } = linkDatum;
  return orientation === "horizontal"
    ? `M${source.y},${source.x}L${target.y},${target.x}`
    : `M${source.x},${source.y}L${target.x},${target.y}`;
};

function FamTree() {
  return (
    <div
      id="treeWrapper"
      style={{
        width: "1580px",
        minWidth: "500px",
        height: "700px",
      }}
    >
      <Tree
        hasInteractiveNodes
        data={orgChart}
        pathFunc="step"
        // pathFunc={straightPathFunc}
        orientation="vertical"
        translate={{ x: 1000, y: 50 }}
        // nodeSize={{ x: 230, y: 230 }}
        enableLegacyTransitions={true}
        separation={{ siblings: 4, nonSiblings: 2 }}
        dataKey={(X) => console.log(X)}
        // depthFactor={200}
      />
    </div>
  );
}

export default FamTree;
