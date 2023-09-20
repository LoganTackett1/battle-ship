// eslint-disable-next-line no-unused-vars
import css from "./render.css";

function createPlayerScene(player) {
  const result = {};

  const sideH1 = document.createElement("h1");
  sideH1.id = `${player}-side-h1`;
  sideH1.classList.add("side-h1");
  const sideDiv = document.createElement("div");
  sideDiv.id = `${player}-side-div`;
  sideDiv.classList.add("side-div");
  result.side = [sideH1, sideDiv];

  const mainH1 = document.createElement("h1");
  mainH1.id = `${player}-main-h1`;
  mainH1.classList.add("main-h1");
  const mainBoard = document.createElement("div");
  mainBoard.id = `${player}-main-board`;
  mainBoard.classList.add("main-board");
  const controls = document.createElement("div");
  controls.id = `${player}-controls`;
  controls.classList.add("controls");

  result.main = [mainH1, mainBoard, controls];

  result.tileArray = [];

  for (let i = 0; i < 10; i += 1) {
    result.tileArray.push([]);
    for (let j = 0; j < 10; j += 1) {
      const tile = document.createElement("div");
      tile.id = `${player}-tile`;
      tile.classList.add("tile");
      mainBoard.appendChild(tile);
      result.tileArray[i].push(tile);
    }
  }

  return result;
}

function createScene() {
  const scene = document.createElement("div");
  scene.id = "scene";

  const statusBar = document.createElement("div");
  statusBar.id = "status-bar";
  scene.appendChild(statusBar);

  const playArea = document.createElement("div");
  playArea.id = "play-area";
  scene.appendChild(playArea);

  const p1Area = document.createElement("div");
  p1Area.id = "p1-area";
  p1Area.classList.add("player-area");
  playArea.appendChild(p1Area);

  const p2Area = document.createElement("div");
  p2Area.id = "p2-area";
  p2Area.classList.add("player-area");
  playArea.appendChild(p2Area);

  const p1Side = document.createElement("div");
  p1Side.id = "p1-side";
  p1Side.classList.add("player-side");
  p1Area.appendChild(p1Side);

  const p2Side = document.createElement("div");
  p2Side.id = "p2-side";
  p2Side.classList.add("player-side");
  p2Area.appendChild(p2Side);

  const p1Main = document.createElement("div");
  p1Main.id = "p1-main";
  p1Main.classList.add("player-main");
  p1Area.appendChild(p1Main);

  const p2Main = document.createElement("div");
  p2Main.id = "p2-main";
  p2Main.classList.add("player-main");
  p2Area.appendChild(p2Main);

  const p1Scene = createPlayerScene("p1");
  const p2Scene = createPlayerScene("p2");

  p1Scene.side.forEach((item) => {
    p1Side.appendChild(item);
  });

  p1Scene.main.forEach((item) => {
    p1Main.appendChild(item);
  });

  p2Scene.side.forEach((item) => {
    p2Side.appendChild(item);
  });

  p2Scene.main.forEach((item) => {
    p2Main.appendChild(item);
  });

  const renderObj = {};
  renderObj.domElement = scene;
  renderObj.p1 = p1Scene;
  renderObj.p2 = p2Scene;

  renderObj.update = function (board) {};

  window.addEventListener("resize", () => {
    const temp1 = p1Scene.main[1];
    const temp2 = p2Scene.main[1];
    const width = temp1.offsetWidth;
    const height = temp1.offsetHeight;
    if (width > height) {
      temp1.style.paddingLeft = `${(width - height) / 2}px`;
      temp1.style.paddingRight = `${(width - height) / 2}px`;
      temp1.style.paddingTop = `0`;
      temp1.style.paddingBottom = `0`;
      temp2.style.paddingLeft = `${(width - height) / 2}px`;
      temp2.style.paddingRight = `${(width - height) / 2}px`;
      temp2.style.paddingTop = `0`;
      temp2.style.paddingBottom = `0`;
    } else {
      temp1.style.paddingLeft = `0`;
      temp1.style.paddingRight = `0`;
      temp1.style.paddingTop = `${(height - width) / 2}px`;
      temp1.style.paddingBottom = `${(height - width) / 2}px`;
      temp2.style.paddingLeft = `0`;
      temp2.style.paddingRight = `0`;
      temp2.style.paddingTop = `${(height - width) / 2}px`;
      temp2.style.paddingBottom = `${(height - width) / 2}px`;
    }
  });

  return renderObj;
}

export default createScene;
