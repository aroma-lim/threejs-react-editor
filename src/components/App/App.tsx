import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Background from "../Three/Background";
import PolygonalColumn from "../Three/PolygonalColumn";
import TopMenuBar from "../TopMenu/TopMenuBar";
import EditPanel from "../EditPanel/EditPanel";
import Model from "../Three/Model";
import Loader from "../Three/Loader";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { selectUrl, setUrl } from "../../store/modelSlice";
import ModelPanel from "../EditPanel/ModelPanel";
import { selectUuid, setUuid } from "../../store/meshSlice";

function App() {
  const dispatch = useAppDispatch();

  const selectedUuid = useAppSelector(selectUuid);
  const selectedUrl = useAppSelector(selectUrl);

  const [polyCols, setPolyCols] = useState<number[]>([]);

  const [urls, setUrls] = useState<string[]>([]);

  const onAddPoly = () => {
    const num = polyCols.length;
    if (num >= 100) {
      window.alert("You can only create up to 100.");
      return;
    }
    setPolyCols((prev) => [...prev, num]);
  };

  const onAddModel = (url: string) => {
    const num = urls.length;
    if (num >= 100) {
      window.alert("You can only import up to 100.");
      return;
    }
    setUrls((prev) => [...prev, url]);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        camera={{ position: [0, 60, 50], fov: 45 }}
        onPointerMissed={() => {
          dispatch(setUrl(""));
          dispatch(setUuid(""));
        }}
      >
        <Background />
        <Suspense fallback={<Loader />}>
          {urls.map((url) => (
            <Model key={url} url={url} />
          ))}
        </Suspense>
        {polyCols.map((pc) => (
          <PolygonalColumn key={pc} pc={pc} />
        ))}
      </Canvas>
      <TopMenuBar onAddPoly={onAddPoly} onAddModel={onAddModel} />
      {selectedUuid ? <EditPanel /> : null}
      {selectedUrl ? <ModelPanel /> : null}
    </div>
  );
}
export default App;
