import { React, useState, useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "react-three-fiber";
import Room from "./Components/models/room2.gltf";
import { useGLTFLoader, OrbitControls } from "drei";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// import { useSpring as UseSpringThree, animated as a } from "react-spring/three";
import TouchLogo from "./3dtouchlogo.png";
import HelpIcon from './helpicon.png';
import HelpModal from "./Components/Modal/HelpModal/HelpModal";
//3d Models
import Introduction from "./Components/models/btnintroduction.gltf";
import Featured from "./Components/models/btnfeatured.gltf";
import Values from "./Components/models/btnvalues.gltf";
import Interests from "./Components/models/btninterests.gltf";
import Current from "./Components/models/btncurrent.gltf";
import Instagram from "./Components/models/linkinstagram.gltf";
import Youtube from "./Components/models/linkyoutube.gltf";
import Journal from "./Components/models/linkjournal.gltf";
//3d Models

//Modal Content
import IntroductionContent from "./Components/Content/IntroductionContent";
import FeaturedContent from "./Components/Content/Featured Projects/FeaturedContent";
import ValuesContent from "./Components/Content/ValuesContent";
import InterestsContent from "./Components/Content/InterestsContent";
import CurrentContent from "./Components/Content/CurrentContent";
import Icon1Content from "./Components/Content/Icons/Icon1Content.js";
import Icon2Content from "./Components/Content/Icons/Icon2Content.js";
import Icon3Content from "./Components/Content/Icons/Icon3Content.js";
import Icon4Content from "./Components/Content/Icons/Icon4Content.js";
import Icon5Content from "./Components/Content/Icons/Icon5Content.js";

//Modal Content

//Icons
import Icon1 from "./Components/models/icon1.gltf";
import Icon2 from "./Components/models/icon2.gltf";
import Icon3 from "./Components/models/icon3.gltf";
import Icon4 from "./Components/models/icon4.gltf";
import Icon5 from "./Components/models/icon5.gltf";


const popUpScreen =
  "Navigate the 3D environment with your finger/cursor.  Click on floating texts and icons to reveal more information.";

function Home() {
  //3d Models---------------------------------------------------------------
  const room = useGLTFLoader(Room, true);
  const introduction = useGLTFLoader(Introduction, true);
  const featured = useGLTFLoader(Featured, true);
  const values = useGLTFLoader(Values, true);
  const interests = useGLTFLoader(Interests, true);
  const current = useGLTFLoader(Current, true);
  const instagram = useGLTFLoader(Instagram, true);
  const youtube = useGLTFLoader(Youtube, true);
  const journal = useGLTFLoader(Journal, true);
  const icon1 = useGLTFLoader(Icon1, true);
  const icon2 = useGLTFLoader(Icon2, true);
  const icon3 = useGLTFLoader(Icon3, true);
  const icon4 = useGLTFLoader(Icon4, true);
  const icon5 = useGLTFLoader(Icon5, true);

  function IntroductionRoute() {
    return (
      <mesh ref={mesh} onPointerDown={() => history.push("/introduction")}>
        <primitive object={introduction.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }
  function FeaturedRoute() {
    return (
      <mesh
        ref={mesh2}
        onPointerDown={() => history.push("/featured-projects")}
      >
        <primitive object={featured.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function ValuesRoute() {
    return (
      <mesh ref={mesh3} onPointerDown={() => history.push("/values")}>
        <primitive object={values.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function InterestsRoute() {
    return (
      <mesh
        ref={mesh4}
        onPointerDown={() => history.push("/personal-interests")}
      >
        <primitive object={interests.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function CurrentRoute() {
    return (
      <mesh ref={mesh5} onPointerDown={() => history.push("/current-project")}>
        <primitive object={current.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }
  // function InstagramRoute() {
  //   return (
  //     <mesh onPointerDown={() => history.push("/instagram")}>
  //       <primitive object={instagram.scene} position={[0, -3.8, 0]} />
  //     </mesh>
  //   );
  // }

  // function YoutubeRoute() {
  //   return (
  //     <mesh onPointerDown={() => history.push("/youtube")}>
  //       <primitive object={youtube.scene} position={[0, -3.8, 0]} />
  //     </mesh>
  //   );
  // }

  // function JournalRoute() {
  //   return (
  //     <mesh onPointerDown={() => history.push("/journal")}>
  //       <primitive object={journal.scene} position={[0, -3.8, 0]} />
  //     </mesh>
  //   );
  // }

  function InstagramRoute() {
    return (
      <mesh onPointerDown={() => window.open("https://www.instagram.com/kazukisworld/")}>
        <primitive object={instagram.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function YoutubeRoute() {
    return (
      <mesh onPointerDown={() => window.open("https://www.youtube.com/channel/UCMVMsfpAXJJzri2MUuBtOhA")}>
        <primitive object={youtube.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function JournalRoute() {
    return (
      <mesh onPointerDown={() => window.open("https://vocal.media/authors/kazuki-mori-243bf016a")}>
        <primitive object={journal.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function Icon1Route() {
    return (
      <mesh ref={mesh6} onPointerDown={() => history.push("/fun-fact-1")}>
        <primitive object={icon1.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function Icon2Route() {
    return (
      <mesh ref={mesh7} onPointerDown={() => history.push("/fun-fact-2")}>
        <primitive object={icon2.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function Icon3Route() {
    return (
      <mesh ref={mesh8} onPointerDown={() => history.push("/fun-fact-3")}>
        <primitive object={icon3.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function Icon4Route() {
    return (
      <mesh ref={mesh9} onPointerDown={() => history.push("/fun-fact-4")}>
        <primitive object={icon4.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }

  function Icon5Route() {
    return (
      <mesh ref={mesh10} onPointerDown={() => history.push("/fun-fact-5")}>
        <primitive object={icon5.scene} position={[0, -3.8, 0]} />
      </mesh>
    );
  }
  //3d Models---------------------------------------------------------------

  const history = useHistory();
  const [openModal, setopenModal] = useState(true);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const props2 = useSpring({ opacity: 0.82, from: { opacity: 1 } });

  function PopUp() {
    if (!openModal) return null;
    return (
      <animated.div className="background2">
        <animated.div className="background3" style={props2} />
        <div className="PopUp">
          <img src={TouchLogo} alt="Logo" className="logo" />
          <h1 className="description">{popUpScreen}</h1>
          <animated.h1
            className="exit"
            style={props}
            onClick={() => setopenModal(false)}
          >
            Start Exploring
          </animated.h1>
        </div>
      </animated.div>
    );
  }

  // const objectAnimation = UseSpringThree({
  //   to: async next => {
  //     await next({ position: [0, 0, 0] });
  //     await next({ position: [0, 0, 0] });
  //   },
  //   from: { position: [0, 0, 0] },
  //   config: { duration: 10000}
  // });

  const mesh = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();
  const mesh5 = useRef();
  const mesh6 = useRef();
  const mesh7 = useRef();
  const mesh8 = useRef();
  const mesh9 = useRef();
  const mesh10 = useRef();
  

  function Frame() {
    return useFrame((state) => {
      const time = state.clock.getElapsedTime();
      mesh.current.position.y =
        mesh.current.position.y + Math.sin(time * 2) / 600;
      const time2 = state.clock.getElapsedTime();
      mesh2.current.position.y =
        mesh2.current.position.y + Math.sin(time2 * 2.4) / 600;
      const time3 = state.clock.getElapsedTime();
      mesh3.current.position.y =
        mesh3.current.position.y + Math.sin(time3 * 1.8) / 600;
      const time4 = state.clock.getElapsedTime();
      mesh4.current.position.y =
        mesh4.current.position.y + Math.sin(time4 * 2.2) / 600;
      const time5 = state.clock.getElapsedTime();
      mesh5.current.position.y =
        mesh5.current.position.y + Math.sin(time5 * 2.6) / 600;
      const time6 = state.clock.getElapsedTime();
      mesh6.current.position.y =
        mesh6.current.position.y + Math.sin(time6 * 2) / 600;
      const time7 = state.clock.getElapsedTime();
      mesh7.current.position.y =
        mesh7.current.position.y + Math.sin(time7 * 2.2) / 600;
      const time8 = state.clock.getElapsedTime();
      mesh8.current.position.y =
        mesh8.current.position.y + Math.sin(time8 * 1.8) / 600;
      const time9 = state.clock.getElapsedTime();
      mesh9.current.position.y =
        mesh9.current.position.y + Math.sin(time9 * 2.6) / 600;
      const time10 = state.clock.getElapsedTime();
      mesh10.current.position.y =
        mesh10.current.position.y + Math.sin(time10 * 2) / 600;
    });
  }

  
  return (
    <section className="App">
      <img onClick={() => history.push("/help")} className="img2" src={HelpIcon} alt="img"/>
      <PopUp />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, -0, 2, 1], fov: 55, zoom: 1 }}
      >
        <mesh rotation={[0, 3.14, 0]}>
          <IntroductionRoute />
          <FeaturedRoute />
          <ValuesRoute />
          <InterestsRoute />
          <CurrentRoute />
          <InstagramRoute />
          <YoutubeRoute />
          <JournalRoute />
          <Icon1Route />
          <Icon2Route />
          <Icon3Route />
          <Icon4Route />
          <Icon5Route />
          <primitive
            object={room.scene}
            position={[0, -3.8, 0]}
            dispose={null}
          />
        </mesh>
        <ambientLight intensity={1} />
        <OrbitControls
          enableRotate={true}
          enableZoom={false}
          maxPolarAngle={1.495}
          minPolarAngle={1.495}
          enablePan={false}
          screenSpacePanning={true}
          rotateSpeed={-0.6}
        />
        <Frame />
      </Canvas>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/introduction" component={IntroductionContent} />
      <Route path="/featured-projects" component={FeaturedContent} />
      <Route path="/values" component={ValuesContent} />
      <Route path="/personal-interests" component={InterestsContent} />
      <Route path="/current-project" component={CurrentContent} />
      <Route path="/fun-fact-1" component={Icon1Content} />
      <Route path="/fun-fact-2" component={Icon2Content} />
      <Route path="/fun-fact-3" component={Icon3Content} />
      <Route path="/fun-fact-4" component={Icon4Content} />
      <Route path="/fun-fact-5" component={Icon5Content} />
      <Route path="/help" component={HelpModal} />
      {/* <Route
        path="/instagram"
        target="_blank"
        component={() => {
          window.location.href = "https://www.instagram.com/kazukisworld/";
          return null;
        }}
      />
      <Link to={"/instagram"} target={"_blank"} href="https://www.instagram.com/kazukisworld"/>
      <Route
        path="/youtube"
        target="_blank"
        component={() => {
          window.location.href =
            "https://www.youtube.com/channel/UCMVMsfpAXJJzri2MUuBtOhA";
          return null;
        }}
      />
      <Route
        path="/journal"
        target="_blank"
        component={() => {
          window.location.href =
            "https://vocal.media/authors/kazuki-mori-243bf016a";
          return null;
        }}
      /> */}
    </BrowserRouter>
  );
}

export default App;
