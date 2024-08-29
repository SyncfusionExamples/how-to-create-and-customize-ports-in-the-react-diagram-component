
import './App.css';
import {useRef, useState} from 'react';
import {DiagramComponent, NodeModel, PortVisibility, Node, PortConstraints, 
   } from "@syncfusion/ej2-react-diagrams";
function App() {
  const diagramRef = useRef<DiagramComponent>(null);
  const [nodes, setNodes] = useState<NodeModel[]>([
    {
      id: 'node1',
      offsetX: 250,offsetY: 250,
      width :100, height: 100,
      shape: { type: 'Basic', shape: 'Rectangle' },
      style : {fill : "#63a2ff"},
      ports: [
        {
          id: 'port1',
          offset: { x: 1, y: 0.5 },
          visibility: PortVisibility.Visible,
          constraints:PortConstraints.Draw,
          // style :{ //Un-Comment for star shape port with style
          //   fill:"yellow",
          //   strokeColor:"black",
          //   strokeWidth:2
          // },
          // shape:"Custom",
          // pathData:"M50,15 L61,35 L84,35 L66,50 L75,70 L50,57 L25,70 L34,50 L16,35 L39,35 Z"
        }
      ],
    },
    {
      id:'node2',
      offsetX: 500,offsetY: 250,
      width :100, height: 100,
      shape: { type: 'Basic', shape: 'Rectangle' },
      style : {fill : "#63a2ff"},
    }
  ]);
  const addPort = () =>{
    const newPort = [
      {
        id: 'port2',
        offset: { x: 1, y: 1 },
        visibility: PortVisibility.Visible,
      },
      { id: 'port3', 
        offset: { x: 0, y: 0 }, 
        visibility: PortVisibility.Visible,
      },
      { id: 'port4', 
        offset: { x: 0, y: 1 }, 
        visibility: PortVisibility.Visible,
      },
    ];
    diagramRef.current?.addPorts(nodes[0], newPort);
  }
  const removePort = () =>{
    const node = nodes[0] as Node;
    nodes[0].ports && diagramRef.current?.removePorts(node, nodes[0].ports);
  }
  const updatePort = () =>{
    const updatedPorts = nodes[0].ports;
    if(updatedPorts?.[0]){
      updatedPorts[0].offset = {x:0, y:0};
      diagramRef.current?.addPorts(nodes[0], updatedPorts);
    }
  }

  return (
    <div>
      <button onClick={addPort}>Add Port</button>
      <button onClick={removePort}>Remove Port</button>
      <button onClick={updatePort}>Update Port</button>
      <DiagramComponent
        ref={diagramRef}
        width={"100%"}
        height={"720px"}
        nodes={nodes}
      />
    </div>
  );
}
export default App;
