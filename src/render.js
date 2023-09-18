function createScene() {
  const scene = document.getElementById("scene");

  while (scene.firstChild) {
    scene.removeChild(scene.lastChild);
  }

  const statusBar = document.createElement("div");
  statusBar.id = "status-bar";
  scene.appendChild(statusBar);

  const playArea = document.createElement("div");
  playArea.id = "play-area";
  scene.appendChild(playArea);

  const p1Area = document.createElement("div");
  p1Area.id = "p1-area";
  playArea.appendChild(p1Area);

  const p2Area = document.createElement("div");
  p2Area.id = "p2-area";
  playArea.appendChild(p2Area);

  const p1Side = document.createElement("div");
  p1Side.id = "p1-side";
  p1Area.appendChild(p1Side);

  const p2Side = document.createElement("div");
  p2Side.id = "p2-side";
  p2Area.appendChild(p2Side);

  const p1Main = document.createElement("div");
  p1Main.id = "p1-main";
  p1Area.appendChild(p1Main);

  const p2Main = document.createElement("div");
  p2Main.id = "p2-main";
  p2Area.appendChild(p2Main);
}
