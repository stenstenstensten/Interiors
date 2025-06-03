let unit
let xPanPosition
let yPanPosition
let isMousePressed = false
let previousMouseX
let previousMouseY
let scaleFactor = 1
let isFirstZoom = true
let overallScale = 8 ///return to 10
let xOff = 0.0 //initial noise offset
let hueShiftBaseA = 1
let hueShiftBaseB = 1
let hueShiftBaseC = 1
let hueShiftBaseD = 1
let hueShiftBaseE = 1
let hueShiftBaseF = 1
let floorBoardHList = []
let floorBoardSList = []
let floorBoardBList = []

let intervalID
//let isDownloading = false
let isCollision = false
// let charArray = ['', 'a', 'm']
let randomKey03
// let textSizeSelect = 12
let zoomCenterX // Variable to store the zoom center X position
let zoomCenterY // Variable to store the zoom center Y position
let alternateState = false
let textInstructions =
  '"1"   r e t u r n    t o    f u l l    v i e w .    "2"   c i r c u i t    o n .    "3"   c i r c u i t    o f f .'

//switches
let switchChoice
let isSwitchOnRoom01
let isSwitchOnRoom02
let isSwitchOnRoom03
let isSwitchOnRoom04
let isSwitchOnRoom05
let isSwitchOnRoom06
let isSwitchOnRoom07
let isSwitchOnRoom08
let isSwitchOnRoom09
let isSwitchOnRoom10
let isSwitchOnRoom11
let isSwitchOnRoom12

//painting values
let screenPosX
let screenPosY
let room01PaintingX
let room01PaintingY
let room02PaintingX
let room02PaintingY
let room03PaintingX
let room03PaintingY
let room04PaintingX
let room04PaintingY
let room05PaintingX
let room05PaintingY
let room06PaintingX
let room06PaintingY
let room07PaintingX
let room07PaintingY
let room08PaintingX
let room08PaintingY
let room09PaintingX
let room09PaintingY
let room10PaintingX
let room10PaintingY
let room11PaintingX
let room11PaintingY
let room12PaintingX
let room12PaintingY

//panel array
let panelAList = []
let panelBList = []
let panelCList = []
let panelDList = []
let panelEList = []
let panelFList = []
let panelGList = []

//furniture array
let furnitureList = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  rectMode(CENTER)
  imageMode(CENTER)
  angleMode(DEGREES)
  textAlign(CENTER, CENTER)
  colorMode(HSB, 360, 100, 100, 255)
  textFont('sans-serif')

  switchChoice = random(1)
  if (switchChoice >= 0.5) {
    utilitiesTrait = 'Switched Off'
    isSwitchOnRoom01 = false
    isSwitchOnRoom02 = false
    isSwitchOnRoom03 = false
    isSwitchOnRoom04 = false
    isSwitchOnRoom05 = false
    isSwitchOnRoom06 = false
    isSwitchOnRoom07 = false
    isSwitchOnRoom08 = false
    isSwitchOnRoom09 = false
    isSwitchOnRoom10 = false
    isSwitchOnRoom11 = false
    isSwitchOnRoom12 = false
  }
  if (switchChoice < 0.5) {
    utilitiesTrait = 'Switched On'
    isSwitchOnRoom01 = true
    isSwitchOnRoom02 = true
    isSwitchOnRoom03 = true
    isSwitchOnRoom04 = true
    isSwitchOnRoom05 = true
    isSwitchOnRoom06 = true
    isSwitchOnRoom07 = true
    isSwitchOnRoom08 = true
    isSwitchOnRoom09 = true
    isSwitchOnRoom10 = true
    isSwitchOnRoom11 = true
    isSwitchOnRoom12 = true
  }

  backgroundColor = [0, 0, 15, 255] //black

  //////////////////////SET UP UNITS AND CANVAS SPACE
  landscapeFormat = width >= height //square included in landsacpe
  portraitFormat = height > width

  if (landscapeFormat) {
    unit = (height / 13) * overallScale
  }
  if (portraitFormat) {
    unit = (width / 13) * overallScale
  }
  //unit = (height / 13) * overallScale
  strokeWeightThin = unit * 0.005

  xPanPosition = 0
  yPanPosition = 0 /// for testing

  //gridLocations
  translateMapX = -unit * 0.3
  translateMapY = -unit * 1.5
  scaleMap = 0.2

  ////PANEL SIZES
  panelThird = unit * 0.3
  panelTwoThirds = unit * 0.6
  panelThreeThirds = unit * 0.9
  panelTopEdge = unit * 0.12
  //PANEL GAPS
  panelGap = unit * 0.33

  //ROTATIONS
  east = 270
  west = 90
  north = 0
  south = 180

  //GRIDS
  row01 = 0 - unit * 4
  row02 = 0 - unit * 3
  row03 = 0 - unit * 2
  row04 = 0 - unit * 1
  row05 = 0
  row06 = 0 + unit * 1
  row07 = 0 + unit * 2
  row08 = 0 + unit * 3
  row09 = 0 + unit * 4

  columnA = 0 - unit * 5.5
  columnB = 0 - unit * 4.5
  columnC = 0 - unit * 3.5
  columnD = 0 - unit * 2.5
  columnE = 0 - unit * 1.5
  columnF = 0 - unit * 0.5
  columnG = 0 + unit * 0.5
  columnH = 0 + unit * 1.5
  columnI = 0 + unit * 2.5
  columnJ = 0 + unit * 3.5
  columnK = 0 + unit * 4.5
  columnL = 0 + unit * 5.5

  //randomSelection values
  //roomSelect
  wallsASelect = random(6)
  wallsBSelect = random(6)
  wallsCSelect = random(6)
  wallsDSelect = random(6)
  wallsESelect = random(6)
  wallsFSelect = random(6)
  wallsGSelect = random(6)
  wallsHSelect = random(6)
  wallsISelect = random(6)
  wallsJSelect = random(6)
  wallsKSelect = random(6)
  wallsLSelect = random(6)
  wallsMSelect = random(6)
  wallsNSelect = random(6)

  //number of doors
  if (wallsASelect >= 2) {
    wallsANumberDoors = 1
  } else wallsANumberDoors = 0

  if (wallsBSelect >= 2) {
    wallsBNumberDoors = 1
  } else wallsBNumberDoors = 0

  if (wallsCSelect >= 2) {
    wallsCNumberDoors = 1
  } else wallsCNumberDoors = 0

  if (wallsDSelect >= 2) {
    wallsDNumberDoors = 1
  } else wallsDNumberDoors = 0

  if (wallsESelect >= 2) {
    wallsENumberDoors = 1
  } else wallsENumberDoors = 0

  if (wallsFSelect >= 2) {
    wallsFNumberDoors = 1
  } else wallsFNumberDoors = 0

  if (wallsGSelect >= 2) {
    wallsGNumberDoors = 1
  } else wallsGNumberDoors = 0

  if (wallsHSelect >= 2) {
    wallsHNumberDoors = 1
  } else wallsHNumberDoors = 0

  if (wallsISelect >= 2) {
    wallsINumberDoors = 1
  } else wallsINumberDoors = 0

  if (wallsJSelect >= 2) {
    wallsJNumberDoors = 1
  } else wallsJNumberDoors = 0

  if (wallsKSelect >= 2) {
    wallsKNumberDoors = 1
  } else wallsKNumberDoors = 0

  if (wallsLSelect >= 2) {
    wallsLNumberDoors = 1
  } else wallsLNumberDoors = 0

  if (wallsMSelect >= 2) {
    wallsMNumberDoors = 1
  } else wallsMNumberDoors = 0

  if (wallsNSelect >= 2) {
    wallsNNumberDoors = 1
  } else wallsNNumberDoors = 0

  threePanelA = wallsASelect >= 0 && wallsASelect < 1
  onePanelA = wallsASelect >= 1 && wallsASelect < 2
  largeDoorA = wallsASelect >= 2 && wallsASelect < 3
  centreDoorA = wallsASelect >= 3 && wallsASelect < 4
  leftDoorA = wallsASelect >= 4 && wallsASelect < 5
  rightDoorA = wallsASelect >= 5 && wallsASelect < 6

  threePanelB = wallsBSelect >= 0 && wallsBSelect < 1
  onePanelB = wallsBSelect >= 1 && wallsBSelect < 2
  largeDoorB = wallsBSelect >= 2 && wallsBSelect < 3
  centreDoorB = wallsBSelect >= 3 && wallsBSelect < 4
  leftDoorB = wallsBSelect >= 4 && wallsBSelect < 5
  rightDoorB = wallsBSelect >= 5 && wallsBSelect < 6

  threePanelC = wallsCSelect >= 0 && wallsCSelect < 1
  onePanelC = wallsCSelect >= 1 && wallsCSelect < 2
  largeDoorC = wallsCSelect >= 2 && wallsCSelect < 3
  centreDoorC = wallsCSelect >= 3 && wallsCSelect < 4
  leftDoorC = wallsCSelect >= 4 && wallsCSelect < 5
  rightDoorC = wallsCSelect >= 5 && wallsCSelect < 6

  threePanelD = wallsDSelect >= 0 && wallsDSelect < 1
  onePanelD = wallsDSelect >= 1 && wallsDSelect < 2
  largeDoorD = wallsDSelect >= 2 && wallsDSelect < 3
  centreDoorD = wallsDSelect >= 3 && wallsDSelect < 4
  leftDoorD = wallsDSelect >= 4 && wallsDSelect < 5
  rightDoorD = wallsDSelect >= 5 && wallsDSelect < 6

  threePanelE = wallsESelect >= 0 && wallsESelect < 1
  onePanelE = wallsESelect >= 1 && wallsESelect < 2
  largeDoorE = wallsESelect >= 2 && wallsESelect < 3
  centreDoorE = wallsESelect >= 3 && wallsESelect < 4
  leftDoorE = wallsESelect >= 4 && wallsESelect < 5
  rightDoorE = wallsESelect >= 5 && wallsESelect < 6

  threePanelF = wallsFSelect >= 0 && wallsFSelect < 1
  onePanelF = wallsFSelect >= 1 && wallsFSelect < 2
  largeDoorF = wallsFSelect >= 2 && wallsFSelect < 3
  centreDoorF = wallsFSelect >= 3 && wallsFSelect < 4
  leftDoorF = wallsFSelect >= 4 && wallsFSelect < 5
  rightDoorF = wallsFSelect >= 5 && wallsFSelect < 6

  threePanelG = wallsGSelect >= 0 && wallsGSelect < 1
  onePanelG = wallsGSelect >= 1 && wallsGSelect < 2
  largeDoorG = wallsGSelect >= 2 && wallsGSelect < 3
  centreDoorG = wallsGSelect >= 3 && wallsGSelect < 4
  leftDoorG = wallsGSelect >= 4 && wallsGSelect < 5
  rightDoorG = wallsGSelect >= 5 && wallsGSelect < 6

  threePanelH = wallsHSelect >= 0 && wallsHSelect < 1
  onePanelH = wallsHSelect >= 1 && wallsHSelect < 2
  largeDoorH = wallsHSelect >= 2 && wallsHSelect < 3
  centreDoorH = wallsHSelect >= 3 && wallsHSelect < 4
  leftDoorH = wallsHSelect >= 4 && wallsHSelect < 5
  rightDoorH = wallsHSelect >= 5 && wallsHSelect < 6

  threePanelI = wallsISelect >= 0 && wallsISelect < 1
  onePanelI = wallsISelect >= 1 && wallsISelect < 2
  largeDoorI = wallsISelect >= 2 && wallsISelect < 3
  centreDoorI = wallsISelect >= 3 && wallsISelect < 4
  leftDoorI = wallsISelect >= 4 && wallsISelect < 5
  rightDoorI = wallsISelect >= 5 && wallsISelect < 6

  threePanelJ = wallsJSelect >= 0 && wallsJSelect < 1
  onePanelJ = wallsJSelect >= 1 && wallsJSelect < 2
  largeDoorJ = wallsJSelect >= 2 && wallsJSelect < 3
  centreDoorJ = wallsJSelect >= 3 && wallsJSelect < 4
  leftDoorJ = wallsJSelect >= 4 && wallsJSelect < 5
  rightDoorJ = wallsJSelect >= 5 && wallsJSelect < 6

  threePanelK = wallsKSelect >= 0 && wallsKSelect < 1
  onePanelK = wallsKSelect >= 1 && wallsKSelect < 2
  largeDoorK = wallsKSelect >= 2 && wallsKSelect < 3
  centreDoorK = wallsKSelect >= 3 && wallsKSelect < 4
  leftDoorK = wallsKSelect >= 4 && wallsKSelect < 5
  rightDoorK = wallsKSelect >= 5 && wallsKSelect < 6

  threePanelL = wallsLSelect >= 0 && wallsLSelect < 1
  onePanelL = wallsLSelect >= 1 && wallsLSelect < 2
  largeDoorL = wallsLSelect >= 2 && wallsLSelect < 3
  centreDoorL = wallsLSelect >= 3 && wallsLSelect < 4
  leftDoorL = wallsLSelect >= 4 && wallsLSelect < 5
  rightDoorL = wallsLSelect >= 5 && wallsLSelect < 6

  threePanelM = wallsMSelect >= 0 && wallsMSelect < 1
  onePanelM = wallsMSelect >= 1 && wallsMSelect < 2
  largeDoorM = wallsMSelect >= 2 && wallsMSelect < 3
  centreDoorM = wallsMSelect >= 3 && wallsMSelect < 4
  leftDoorM = wallsMSelect >= 4 && wallsMSelect < 5
  rightDoorM = wallsMSelect >= 5 && wallsMSelect < 6

  threePanelN = wallsNSelect >= 0 && wallsNSelect < 1
  onePanelN = wallsNSelect >= 1 && wallsNSelect < 2
  largeDoorN = wallsNSelect >= 2 && wallsNSelect < 3
  centreDoorN = wallsNSelect >= 3 && wallsNSelect < 4
  leftDoorN = wallsNSelect >= 4 && wallsNSelect < 5
  rightDoorN = wallsNSelect >= 5 && wallsNSelect < 6

  //externalWallSelect
  extASelect = random(3)
  extBSelect = random(3)
  extCSelect = random(3)
  extDSelect = random(3)
  extESelect = random(3)
  extFSelect = random(3)
  extGSelect = random(3)
  extHSelect = random(3)
  extISelect = random(3)
  extJSelect = random(3)
  extKSelect = random(3)
  extLSelect = random(3)
  extMSelect = random(3)

  ///door values
  colorBluePainting = [240, 100, 100, 255] //[250, 100, 100, 255]
  colorBlueScreen = [240, 100, 100, 255]
  colorOrangeScreen = [240, 100, 100, 2555]
  //orange [358, 60, 90, 255]
  doorCentreX = 0
  doorCentreY = 0 + panelThird * 0.56
  doorCentreW = panelThird * 0.7
  doorCentreH = panelTwoThirds * 1.04
  doorLeftX = 0 - panelGap
  doorLeftY = 0 + panelThird * 0.56
  doorLeftW = panelThird * 0.7
  doorLeftH = panelTwoThirds * 1.04
  doorRightX = 0 + panelGap
  doorRightY = 0 + panelThird * 0.56
  doorRightW = panelThird * 0.7
  doorRightH = panelTwoThirds * 1.04
  doorLargeX = 0
  doorLargeY = 0 + panelThird * 0.28
  doorLargeW = panelThird * 1.88
  doorLargeH = panelTwoThirds * 1.34

  //furnitureSelect
  furnitureYES = 0.5
  room01TLFurnitureSelect = random(1)
  room01TRFurnitureSelect = random(1)
  room01BLFurnitureSelect = random(1)
  room01BRFurnitureSelect = random(1)

  room02TLFurnitureSelect = random(1)
  room02TRFurnitureSelect = random(1)
  room02BLFurnitureSelect = random(1)
  room02BRFurnitureSelect = random(1)

  room03TLFurnitureSelect = random(1)
  room03TRFurnitureSelect = random(1)
  room03BLFurnitureSelect = random(1)
  room03BRFurnitureSelect = random(1)

  room04TLFurnitureSelect = random(1)
  room04TRFurnitureSelect = random(1)
  room04BLFurnitureSelect = random(1)
  room04BRFurnitureSelect = random(1)

  room05TLFurnitureSelect = random(1)
  room05TRFurnitureSelect = random(1)
  room05BLFurnitureSelect = random(1)
  room05BRFurnitureSelect = random(1)

  room06TLFurnitureSelect = random(1)
  room06TRFurnitureSelect = random(1)
  room06BLFurnitureSelect = random(1)
  room06BRFurnitureSelect = random(1)

  room07TLFurnitureSelect = random(1)
  room07TRFurnitureSelect = random(1)
  room07BLFurnitureSelect = random(1)
  room07BRFurnitureSelect = random(1)

  room08TLFurnitureSelect = random(1)
  room08TRFurnitureSelect = random(1)
  room08BLFurnitureSelect = random(1)
  room08BRFurnitureSelect = random(1)

  room09TLFurnitureSelect = random(1)
  room09TRFurnitureSelect = random(1)
  room09BLFurnitureSelect = random(1)
  room09BRFurnitureSelect = random(1)

  room10TLFurnitureSelect = random(1)
  room10TRFurnitureSelect = random(1)
  room10BLFurnitureSelect = random(1)
  room10BRFurnitureSelect = random(1)

  room11TLFurnitureSelect = random(1)
  room11TRFurnitureSelect = random(1)
  room11BLFurnitureSelect = random(1)
  room11BRFurnitureSelect = random(1)

  room12TLFurnitureSelect = random(1)
  room12TRFurnitureSelect = random(1)
  room12BLFurnitureSelect = random(1)
  room12BRFurnitureSelect = random(1)

  indexFurniture01 = int(random(0, 40))
  indexFurniture02 = int(random(0, 40))
  indexFurniture03 = int(random(0, 40))
  indexFurniture04 = int(random(0, 40))
  indexFurniture05 = int(random(0, 40))
  indexFurniture06 = int(random(0, 40))
  indexFurniture07 = int(random(0, 40))
  indexFurniture08 = int(random(0, 40))
  indexFurniture09 = int(random(0, 40))
  indexFurniture10 = int(random(0, 40))
  indexFurniture11 = int(random(0, 40))
  indexFurniture12 = int(random(0, 40))

  //painting collision positions
  //painting postions
  //main navigation
  screenPosX = 0 - (unit * 3) / overallScale
  screenPosY = 0 - (unit * 1.5) / overallScale
  //each room
  //(((-unit * 1.25) / scaleFactor) * 10, 0)

  //room 01
  room01Painting = random(1)
  if (room01Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelB || onePanelB || leftDoorB || rightDoorB) {
      room01PaintingX = columnB
      room01PaintingY = row04 - unit * 0.1
    }
    if (centreDoorB) {
      room01PaintingX = columnB - unit * 0.33
      room01PaintingY = row04 - unit * 0.1
    }
    if (largeDoorB) {
      room01PaintingX = columnB + unit * 0.4
      room01PaintingY = row04 - unit * 0.1
    }
  }
  if (room01Painting > 0.25 && room01Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    room01PaintingX = columnC + unit * 0.1
    room01PaintingY = row05 + unit * 0.33
    ///SET IN PAINTING
  }
  if (room01Painting > 0.5 && room01Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (threePanelA || onePanelA || leftDoorA || rightDoorA) {
      room01PaintingX = columnB
      room01PaintingY = row06 + unit * 0.1
    }
    if (centreDoorA) {
      room01PaintingX = columnB - unit * 0.33
      room01PaintingY = row06 + unit * 0.1
    }
    if (largeDoorA) {
      room01PaintingX = columnB + unit * 0.4
      room01PaintingY = row06 + unit * 0.1
    }
  }
  if (room01Painting > 0.75) {
    //WEST ELEVATION SELECTED
    room01PaintingX = columnA - unit * 0.1
    room01PaintingY = row05 - unit * 0.33
    ///SET IN PAINTING
  }
  //room 02
  room02Painting = random(1)
  if (room02Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelD || onePanelD || leftDoorD || rightDoorD) {
      room02PaintingX = columnE
      room02PaintingY = row04 - unit * 0.1
    }
    if (centreDoorD) {
      room02PaintingX = columnE - unit * 0.33
      room02PaintingY = row04 - unit * 0.1
    }
    if (largeDoorD) {
      room02PaintingX = columnE + unit * 0.4
      room02PaintingY = row04 - unit * 0.1
    }
  }
  if (room02Painting > 0.25 && room02Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    room02PaintingX = columnF + unit * 0.1
    room02PaintingY = row05 + unit * 0.33
    ///SET IN PAINTING
  }
  if (room02Painting > 0.5 && room02Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (threePanelC || onePanelC || leftDoorC || rightDoorC) {
      room02PaintingX = columnE
      room02PaintingY = row06 + unit * 0.1
    }
    if (centreDoorC) {
      room02PaintingX = columnE - unit * 0.33
      room02PaintingY = row06 + unit * 0.1
    }
    if (largeDoorC) {
      room02PaintingX = columnE + unit * 0.4
      room02PaintingY = row06 + unit * 0.1
    }
  }
  if (room02Painting > 0.75) {
    //WEST ELEVATION SELECTED
    room02PaintingX = columnD - unit * 0.1
    room02PaintingY = row05 - unit * 0.33
    ///SET IN PAINTING
  }
  //room 03
  room03PaintingX = columnG - unit * 0.1
  room03PaintingY = row05 + unit * 0.33
  //room 04
  room04Painting = random(1)
  if (room04Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelG || onePanelG || leftDoorG || rightDoorG) {
      room04PaintingX = columnK
      room04PaintingY = row04 - unit * 0.1
    }
    if (centreDoorG) {
      room04PaintingX = columnK - unit * 0.33
      room04PaintingY = row04 - unit * 0.1
    }
    if (largeDoorG) {
      room04PaintingX = columnK + unit * 0.4
      room04PaintingY = row04 - unit * 0.1
    }
  }
  if (room04Painting > 0.25 && room04Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (extGSelect >= 0 && extGSelect < 1) {
      room04PaintingX = columnL + unit * 0.1
      room04PaintingY = row05
    }
    if (extGSelect >= 1 && extGSelect < 2) {
      room04PaintingX = columnL + unit * 0.1
      room04PaintingY = row05
    }
    if (extGSelect >= 2) {
      room04PaintingX = columnL + unit * 0.1
      room04PaintingY = row05 + unit * 0.33
    }
  }
  if (room04Painting > 0.5 && room04Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (threePanelF || onePanelF || leftDoorF || rightDoorF) {
      room04PaintingX = columnK
      room04PaintingY = row06 + unit * 0.1
    }
    if (centreDoorF) {
      room04PaintingX = columnK - unit * 0.33
      room04PaintingY = row06 + unit * 0.1
    }
    if (largeDoorF) {
      room04PaintingX = columnK + unit * 0.4
      room04PaintingY = row06 + unit * 0.1
    }
  }
  if (room04Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelH || onePanelH || leftDoorH || rightDoorH) {
      room04PaintingX = columnJ - unit * 0.1
      room04PaintingY = row05
    }
    if (centreDoorH) {
      room04PaintingX = columnJ - unit * 0.1
      room04PaintingY = row05 + unit * 0.33
    }
    if (largeDoorH) {
      room04PaintingX = columnJ - unit * 0.1
      room04PaintingY = row05 - unit * 0.4
    }
  }

  //room 05
  room05Painting = random(1)
  if (room05Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (extLSelect >= 0 && extLSelect < 1) {
      room05PaintingX = columnB
      room05PaintingY = row01 - unit * 0.1
    }
    if (extLSelect >= 1 && extLSelect < 2) {
      room05PaintingX = columnB + unit * 0.33
      room05PaintingY = row01 - unit * 0.1
    }
    if (extLSelect >= 2) {
      room05PaintingX = columnB - unit * 0.33
      room05PaintingY = row01 - unit * 0.1
    }
  }
  if (room05Painting > 0.25 && room05Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (threePanelK || onePanelK || leftDoorK || rightDoorK) {
      room05PaintingX = columnC + unit * 0.1
      room05PaintingY = row02
    }
    if (centreDoorK) {
      room05PaintingX = columnC + unit * 0.1
      room05PaintingY = row02 - unit * 0.33
    }
    if (largeDoorK) {
      room05PaintingX = columnC + unit * 0.1
      room05PaintingY = row02 - unit * 0.4
    }
  }
  if (room05Painting > 0.5 && room05Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (threePanelB || onePanelB || leftDoorB || rightDoorB) {
      room05PaintingX = columnB
      room05PaintingY = row03 + unit * 0.1
    }
    if (centreDoorB) {
      room05PaintingX = columnB - unit * 0.33
      room05PaintingY = row03 + unit * 0.1
    }
    if (largeDoorB) {
      room05PaintingX = columnB + unit * 0.4
      room05PaintingY = row03 + unit * 0.1
    }
  }
  if (room05Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (extMSelect >= 0 && extMSelect < 1) {
      room05PaintingX = columnA - unit * 0.1
      room05PaintingY = row02
    }
    if (extMSelect >= 1 && extMSelect < 2) {
      room05PaintingX = columnA - unit * 0.1
      room05PaintingY = row02
    }
    if (extMSelect >= 2) {
      room05PaintingX = columnA - unit * 0.1
      room05PaintingY = row02 + unit * 0.33
    }
  }

  //room 06
  room06Painting = random(1)
  if (room06Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (extKSelect >= 0 && extKSelect < 1) {
      room06PaintingX = columnE
      room06PaintingY = row01 - unit * 0.1
    }
    if (extKSelect >= 1 && extKSelect < 2) {
      room06PaintingX = columnE + unit * 0.33
      room06PaintingY = row01 - unit * 0.1
    }
    if (extKSelect >= 2) {
      room06PaintingX = columnE - unit * 0.33
      room06PaintingY = row01 - unit * 0.1
    }
  }
  if (room06Painting > 0.25 && room06Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (threePanelJ || onePanelJ || leftDoorJ || rightDoorJ) {
      room06PaintingX = columnF + unit * 0.1
      room06PaintingY = row02
    }
    if (centreDoorJ) {
      room06PaintingX = columnF + unit * 0.1
      room06PaintingY = row02 - unit * 0.33
    }
    if (largeDoorJ) {
      room06PaintingX = columnF + unit * 0.1
      room06PaintingY = row02 - unit * 0.4
    }
  }
  if (room06Painting > 0.5 && room06Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (threePanelD || onePanelD || leftDoorD || rightDoorD) {
      room06PaintingX = columnE
      room06PaintingY = row03 + unit * 0.1
    }
    if (centreDoorD) {
      room06PaintingX = columnE - unit * 0.33
      room06PaintingY = row03 + unit * 0.1
    }
    if (largeDoorD) {
      room06PaintingX = columnE + unit * 0.4
      room06PaintingY = row03 + unit * 0.1
    }
  }
  if (room06Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelK || onePanelK || leftDoorK || rightDoorK) {
      room06PaintingX = columnD - unit * 0.1
      room06PaintingY = row02
    }
    if (centreDoorK) {
      room06PaintingX = columnD - unit * 0.1
      room06PaintingY = row02 - unit * 0.33
    }
    if (largeDoorK) {
      room06PaintingX = columnD - unit * 0.1
      room06PaintingY = row02 + unit * 0.4
    }
  }

  //room 07
  room07Painting = random(1)
  if (room07Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (extJSelect >= 0 && extJSelect < 1) {
      room07PaintingX = columnH
      room07PaintingY = row01 - unit * 0.1
    }
    if (extJSelect >= 1 && extJSelect < 2) {
      room07PaintingX = columnH + unit * 0.33
      room07PaintingY = row01 - unit * 0.1
    }
    if (extJSelect >= 2) {
      room07PaintingX = columnH - unit * 0.33
      room07PaintingY = row01 - unit * 0.1
    }
  }
  if (room07Painting > 0.25 && room07Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (threePanelI || onePanelI || leftDoorI || rightDoorI) {
      room07PaintingX = columnI + unit * 0.1
      room07PaintingY = row02
    }
    if (centreDoorI) {
      room07PaintingX = columnI + unit * 0.1
      room07PaintingY = row02
    }
    if (largeDoorI) {
      room07PaintingX = columnI + unit * 0.1
      room07PaintingY = row02 + unit * 0.4
    }
  }
  if (room07Painting > 0.5 && room07Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    room07PaintingX = columnH + unit * 0.33
    room07PaintingY = row03 + unit * 0.1
  }
  if (room07Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelJ || onePanelJ || leftDoorJ || rightDoorJ) {
      room07PaintingX = columnG - unit * 0.1
      room07PaintingY = row02
    }
    if (centreDoorJ) {
      room07PaintingX = columnG - unit * 0.1
      room07PaintingY = row02 - unit * 0.33
    }
    if (largeDoorJ) {
      room07PaintingX = columnG - unit * 0.1
      room07PaintingY = row02 + unit * 0.4
    }
  }

  //room 08
  room08Painting = random(1)
  if (room08Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (extISelect >= 0 && extISelect < 1) {
      room08PaintingX = columnK
      room08PaintingY = row01 - unit * 0.1
    }
    if (extISelect >= 1 && extISelect < 2) {
      room08PaintingX = columnK + unit * 0.33
      room08PaintingY = row01 - unit * 0.1
    }
    if (extISelect >= 2) {
      room08PaintingX = columnK - unit * 0.33
      room08PaintingY = row01 - unit * 0.1
    }
  }
  if (room08Painting > 0.25 && room08Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (extHSelect >= 0 && extHSelect < 1) {
      room08PaintingX = columnL + unit * 0.1
      room08PaintingY = row02
    }
    if (extHSelect >= 1 && extHSelect < 2) {
      room08PaintingX = columnL + unit * 0.1
      room08PaintingY = row02
    }
    if (extHSelect >= 2) {
      room08PaintingX = columnL + unit * 0.1
      room08PaintingY = row02 + unit * 0.33
    }
  }
  if (room08Painting > 0.5 && room08Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (threePanelG || onePanelG || leftDoorG || rightDoorG) {
      room08PaintingX = columnK
      room08PaintingY = row03 + unit * 0.1
    }
    if (centreDoorG) {
      room08PaintingX = columnK - unit * 0.33
      room08PaintingY = row03 + unit * 0.1
    }
    if (largeDoorG) {
      room08PaintingX = columnK + unit * 0.4
      room08PaintingY = row03 + unit * 0.1
    }
  }
  if (room08Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelI || onePanelI || leftDoorI || rightDoorI) {
      room08PaintingX = columnJ - unit * 0.1
      room08PaintingY = row02
    }
    if (centreDoorI) {
      room08PaintingX = columnJ - unit * 0.1
      room08PaintingY = row02 + unit * 0.33
    }
    if (largeDoorI) {
      room08PaintingX = columnJ - unit * 0.1
      room08PaintingY = row02 - unit * 0.4
    }
  }

  //room 09
  room09Painting = random(1)
  if (room09Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelA || onePanelA || leftDoorA || rightDoorA) {
      room09PaintingX = columnB
      room09PaintingY = row07 - unit * 0.1
    }
    if (centreDoorA) {
      room09PaintingX = columnB + unit * 0.33
      room09PaintingY = row07 - unit * 0.1
    }
    if (largeDoorA) {
      room09PaintingX = columnB - unit * 0.4
      room09PaintingY = row07 - unit * 0.1
    }
  }
  if (room09Painting > 0.25 && room09Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (threePanelL || onePanelL || leftDoorL || rightDoorL) {
      room09PaintingX = columnC + unit * 0.1
      room09PaintingY = row08
    }
    if (centreDoorL) {
      room09PaintingX = columnC + unit * 0.1
      room09PaintingY = row08 + unit * 0.33
    }
    if (largeDoorL) {
      room09PaintingX = columnC + unit * 0.1
      room09PaintingY = row08 + unit * 0.4
    }
  }
  if (room09Painting > 0.5 && room09Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (extBSelect >= 0 && extBSelect < 1) {
      room09PaintingX = columnB
      room09PaintingY = row09 + unit * 0.1
    }
    if (extBSelect >= 1 && extBSelect < 2) {
      room09PaintingX = columnB + unit * 0.33
      room09PaintingY = row09 + unit * 0.1
    }
    if (extBSelect >= 2) {
      room09PaintingX = columnB - unit * 0.33
      room09PaintingY = row09 + unit * 0.1
    }
  }
  if (room09Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (extASelect >= 0 && extASelect < 1) {
      room09PaintingX = columnA - unit * 0.1
      room09PaintingY = row08
    }
    if (extASelect >= 1 && extASelect < 2) {
      room09PaintingX = columnA - unit * 0.1
      room09PaintingY = row08
    }
    if (extASelect >= 2) {
      room09PaintingX = columnA - unit * 0.1
      room09PaintingY = row08 + unit * 0.33
    }
  }

  //room 10
  room10Painting = random(1)
  if (room10Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelC || onePanelC || leftDoorC || rightDoorC) {
      room10PaintingX = columnE
      room10PaintingY = row07 - unit * 0.1
    }
    if (centreDoorC) {
      room10PaintingX = columnE + unit * 0.33
      room10PaintingY = row07 - unit * 0.1
    }
    if (largeDoorC) {
      room10PaintingX = columnE - unit * 0.4
      room10PaintingY = row07 - unit * 0.1
    }
  }
  if (room10Painting > 0.25 && room10Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (threePanelM || onePanelM || leftDoorM || rightDoorM) {
      room10PaintingX = columnF + unit * 0.1
      room10PaintingY = row08
    }
    if (centreDoorM) {
      room10PaintingX = columnF + unit * 0.1
      room10PaintingY = row08 + unit * 0.33
    }
    if (largeDoorM) {
      room10PaintingX = columnF + unit * 0.1
      room10PaintingY = row08 + unit * 0.4
    }
  }
  if (room10Painting > 0.5 && room10Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (extCSelect >= 0 && extCSelect < 1) {
      room10PaintingX = columnE
      room10PaintingY = row09 + unit * 0.1
    }
    if (extCSelect >= 1 && extCSelect < 2) {
      room10PaintingX = columnE + unit * 0.33
      room10PaintingY = row09 + unit * 0.1
    }
    if (extCSelect >= 2) {
      room10PaintingX = columnE - unit * 0.33
      room10PaintingY = row09 + unit * 0.1
    }
  }
  if (room10Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelL || onePanelL || leftDoorL || rightDoorL) {
      room10PaintingX = columnD - unit * 0.1
      room10PaintingY = row08
    }
    if (centreDoorL) {
      room10PaintingX = columnD - unit * 0.1
      room10PaintingY = row08 + unit * 0.33
    }
    if (largeDoorL) {
      room10PaintingX = columnD - unit * 0.1
      room10PaintingY = row08 - unit * 0.4
    }
  }

  //room 11
  room11Painting = random(1)
  if (room11Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelE || onePanelE || leftDoorE || rightDoorE) {
      room11PaintingX = columnH
      room11PaintingY = row07 - unit * 0.1
    }
    if (centreDoorE) {
      room11PaintingX = columnH + unit * 0.33
      room11PaintingY = row07 - unit * 0.1
    }
    if (largeDoorE) {
      room11PaintingX = columnH - unit * 0.4
      room11PaintingY = row07 - unit * 0.1
    }
  }
  if (room11Painting > 0.25 && room11Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (threePanelN || onePanelN || leftDoorN || rightDoorN) {
      room11PaintingX = columnI + unit * 0.1
      room11PaintingY = row08
    }
    if (centreDoorN) {
      room11PaintingX = columnI + unit * 0.1
      room11PaintingY = row08
    }
    if (largeDoorN) {
      room11PaintingX = columnI + unit * 0.1
      room11PaintingY = row08 - unit * 0.4
    }
  }
  if (room11Painting > 0.5 && room11Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (extDSelect >= 0 && extDSelect < 1) {
      room11PaintingX = columnH
      room11PaintingY = row09 + unit * 0.1
    }
    if (extDSelect >= 1 && extDSelect < 2) {
      room11PaintingX = columnH + unit * 0.33
      room11PaintingY = row09 + unit * 0.1
    }
    if (extDSelect >= 2) {
      room11PaintingX = columnH - unit * 0.33
      room11PaintingY = row09 + unit * 0.1
    }
  }
  if (room11Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelM || onePanelM || leftDoorM || rightDoorM) {
      room11PaintingX = columnG - unit * 0.1
      room11PaintingY = row08
    }
    if (centreDoorM) {
      room11PaintingX = columnG - unit * 0.1
      room11PaintingY = row08 + unit * 0.33
    }
    if (largeDoorM) {
      room11PaintingX = columnG - unit * 0.1
      room11PaintingY = row08 - unit * 0.4
    }
  }

  //room 12
  room12Painting = random(1)
  if (room12Painting <= 0.25) {
    //NORTH ELEVATION SELECTED
    if (threePanelF || onePanelF || leftDoorF || rightDoorF) {
      room12PaintingX = columnK
      room12PaintingY = row07 - unit * 0.1
    }
    if (centreDoorF) {
      room12PaintingX = columnK - unit * 0.33
      room12PaintingY = row07 - unit * 0.1
    }
    if (largeDoorF) {
      room12PaintingX = columnK + unit * 0.4
      room12PaintingY = row07 - unit * 0.1
    }
  }
  if (room12Painting > 0.25 && room12Painting <= 0.5) {
    //EAST ELEVATION SELECTED
    if (extFSelect >= 0 && extFSelect < 1) {
      room12PaintingX = columnL + unit * 0.1
      room12PaintingY = row08
    }
    if (extFSelect >= 1 && extFSelect < 2) {
      room12PaintingX = columnL + unit * 0.1
      room12PaintingY = row08 + unit * 0.33
    }
    if (extFSelect >= 2) {
      room12PaintingX = columnL + unit * 0.1
      room12PaintingY = row08 - unit * 0.33
    }
  }
  if (room12Painting > 0.5 && room12Painting <= 0.75) {
    //SOUTH ELEVATION SELECTED
    if (extESelect >= 0 && extESelect < 1) {
      room12PaintingX = columnK
      room12PaintingY = row09 + unit * 0.1
    }
    if (extESelect >= 1 && extESelect < 2) {
      room12PaintingX = columnK - unit * 0.33
      room12PaintingY = row09 + unit * 0.1
    }
    if (extESelect >= 2) {
      room12PaintingX = columnK + unit * 0.33
      room12PaintingY = row09 + unit * 0.1
    }
  }
  if (room12Painting > 0.75) {
    //WEST ELEVATION SELECTED
    if (threePanelN || onePanelN || leftDoorN || rightDoorN) {
      room12PaintingX = columnJ - unit * 0.1
      room12PaintingY = row08
    }
    if (centreDoorN) {
      room12PaintingX = columnJ - unit * 0.1
      room12PaintingY = row08 + unit * 0.33
    }
    if (largeDoorN) {
      room12PaintingX = columnJ - unit * 0.1
      room12PaintingY = row08 - unit * 0.4
    }
  }

  //randomKey03 = String.fromCharCode(random(65, 91)); // Random uppercase letter
  // let randomIndex = floor(random(charArray.length));

  //color Settings
  hueValueLow = 0
  hueValueHigh = 260
  saturationValueLow = 0
  saturationValueHigh = 15
  brightnessValueLow = 40
  brightnessValueHigh = 100
  hueShiftLow = 0.1
  hueShiftHigh = 1
  hueShifterBottom = -70
  hueShifterTop = 70

  //floor color
  //need to do this still

  //create a number of furniture elements
  for (let i = 0; i < 50; i++) {
    let randomFurniture01x = random(0 - unit * 0.1, 0 + unit * 0.1)
    let randomFurniture01y = random(0 - unit * 0.1, 0 + unit * 0.1)
    let randomFurniture01w = random(unit * 0.1, unit * 0.25)
    let randomFurniture01d = random(unit * 0.1, unit * 0.25)
    let randomFurniture01h = random(unit * 0.1, unit * 0.25)
    let randomFurniture01Offset = random(unit * 0.5, unit * 0.8)
    let randomFurniture02x = random(0 - unit * 0.1, 0 + unit * 0.1)
    let randomFurniture02y = random(0 - unit * 0.1, 0 + unit * 0.1)
    let randomFurniture02w = random(unit * 0.1, unit * 0.25)
    let randomFurniture02d = random(unit * 0.1, unit * 0.25)
    let randomFurniture02h = random(unit * 0.1, unit * 0.25)
    let randomFurniture02Offset = random(unit * 0.5, unit * 0.8)
    let randomFurniture03x = random(0 - unit * 0.1, 0 + unit * 0.1)
    let randomFurniture03y = random(0 - unit * 0.1, 0 + unit * 0.1)
    let randomFurniture03w = random(unit * 0.1, unit * 0.25)
    let randomFurniture03d = random(unit * 0.1, unit * 0.25)
    let randomFurniture03h = random(unit * 0.1, unit * 0.25)
    let randomFurniture03Offset = random(unit * 0.5, unit * 0.8)
    let furnitureInstance = new furnitureElement(
      randomFurniture01x,
      randomFurniture01y,
      randomFurniture01w,
      randomFurniture01d,
      randomFurniture01h,
      randomFurniture01Offset,
      randomFurniture02x,
      randomFurniture02y,
      randomFurniture02w,
      randomFurniture02d,
      randomFurniture02h,
      randomFurniture02Offset,
      randomFurniture03x,
      randomFurniture03y,
      randomFurniture03w,
      randomFurniture03d,
      randomFurniture03h,
      randomFurniture03Offset
    )
    furnitureList.push(furnitureInstance)
  }

  //create floorBoard colors
  for (let i = 0; i < 13; i++) {
    let floorBoardH = random(5, 35) //(15,25)
    floorBoardHList.push(floorBoardH)
  }
  for (let i = 0; i < 13; i++) {
    let floorBoardS = random(10, 30) //(20,40)
    floorBoardSList.push(floorBoardS)
  }
  for (let i = 0; i < 13; i++) {
    let floorBoardB = random(20, 70) //(30,60)
    floorBoardBList.push(floorBoardB)
  }

  //create a number of panels
  //panelA (large opening)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelAInstance = new panelA(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelAList.push(panelAInstance)
  }
  //panelB (single wall panel)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelBInstance = new panelB(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelBList.push(panelBInstance)
  }
  //panelC (three wall panels)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelCInstance = new panelC(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelCList.push(panelCInstance)
  }
  //panelD (three wall panels centre door)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelDInstance = new panelD(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelDList.push(panelDInstance)
  }
  //panelE (three wall panels left door)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelEInstance = new panelE(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelEList.push(panelEInstance)
  }
  //panelF (three wall panels right door)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelFInstance = new panelF(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelFList.push(panelFInstance)
  }
  //panelG (window)
  for (let i = 0; i < 40; i++) {
    let randomColorH = random(hueValueLow, hueValueHigh)
    let randomColorS = random(saturationValueLow, saturationValueHigh)
    let randomColorB = random(brightnessValueLow, brightnessValueHigh)
    let hueShift = random(hueShiftLow, hueShiftHigh)
    let panelGInstance = new panelG(
      randomColorH,
      randomColorS,
      randomColorB,
      hueShift
    )
    panelGList.push(panelGInstance)
  }

  // Set an interval to call your function every 10 seconds (10000 milliseconds)
  // intervalValue1 = random(1000, 6000)
  // intervalValue2 = random(1000, 6000)
  // intervalValue3 = random(1000, 6000)

  resetValue() // Initialize the value
  setInterval(resetValue, 12000)

  intervalID = setInterval(resetFurniture1, intervalValue1)
  intervalID = setInterval(resetFurniture2, intervalValue2)
  intervalID = setInterval(resetFurniture3, intervalValue3)

  ////////RANDOM VARIABLES FOR ROOM CONSTRUCTION
  ////rooms 01 to 03 are set by the painting

  traitNumberDoors =
    3 +
    wallsANumberDoors +
    wallsBNumberDoors +
    wallsCNumberDoors +
    wallsDNumberDoors +
    wallsENumberDoors +
    wallsFNumberDoors +
    wallsGNumberDoors +
    wallsHNumberDoors +
    wallsINumberDoors +
    wallsJNumberDoors +
    wallsKNumberDoors +
    wallsLNumberDoors +
    wallsMNumberDoors +
    wallsNNumberDoors

  //room traits
  traitRoom01 = 'Interior with a Chair'
  traitRoom02 = 'Interior with Ida with her back turned'
  traitRoom03 = 'Interior with a Window'
  if (wallsASelect < 2 && wallsLSelect < 2) {
    traitRoom04 = 'Hidden Interior'
  } else traitRoom04 = 'Interior with '
  if (wallsCSelect < 2 && wallsLSelect < 2 && wallsMSelect < 2) {
    traitRoom05 = 'Hidden Interior'
  } else traitRoom05 = 'Interior with '
  if (wallsESelect < 2 && wallsMSelect < 2 && wallsNSelect < 2) {
    traitRoom06 = 'Hidden Interior'
  } else traitRoom06 = 'Interior with '
  if (wallsFSelect < 2 && wallsNSelect < 2) {
    traitRoom07 = 'Hidden Interior'
  } else traitRoom07 = 'Interior with '
  if (wallsHSelect < 2 && wallsGSelect < 2 && wallsFSelect < 2) {
    traitRoom08 = 'Hidden Interior'
  } else traitRoom08 = 'Interior with '
  if (wallsGSelect < 2 && wallsISelect < 2) {
    traitRoom09 = 'Hidden Interior'
  } else traitRoom09 = 'Interior with '
  traitRoom10 = 'Interior with '
  if (wallsDSelect < 2 && wallsJSelect < 2 && wallsKSelect < 2) {
    traitRoom11 = 'Hidden Interior'
  } else traitRoom11 = 'Interior with '
  if (wallsBSelect < 2 && wallsKSelect < 2) {
    traitRoom12 = 'Hidden Interior'
  } else traitRoom12 = 'Interior with '

  // Set traits ///the names can't be variables!!
  let traits = {
    'Number of Doors': traitNumberDoors,
    'Interior with Circuit': utilitiesTrait,
    'Room 01': traitRoom01,
    'Room 02': traitRoom02,
    'Room 03': traitRoom03,
    'Room 04': traitRoom04,
    'Room 05': traitRoom05,
    'Room 06': traitRoom06,
    'Room 07': traitRoom07,
    'Room 08': traitRoom08,
    'Room 09': traitRoom09,
    'Room 10': traitRoom10,
    'Room 11': traitRoom11,
    'Room 12': traitRoom12,
  }
}

/////////////////////////////////////////////////////////

function draw() {
  background(backgroundColor)
  strokeWeight(strokeWeightThin)

  // if (isDownloading) {
  //   scale(4)
  // }
  //TEST TRAITS
  // fill(0, 100, 100, 255)
  // textSize(10)
  // text(traitNumberDoors, 420, 10)
  // text(utilitiesTrait, 420, 20)
  // text(traitRoom01, 120, 10)
  // text(traitRoom02, 120, 20)
  // text(traitRoom03, 120, 30)
  // text(traitRoom04, 120, 40)
  // text(traitRoom05, 120, 50)
  // text(traitRoom06, 120, 60)
  // text(traitRoom07, 120, 70)
  // text(traitRoom08, 120, 80)
  // text(traitRoom09, 120, 90)
  // text(traitRoom10, 120, 100)
  // text(traitRoom11, 120, 110)
  // text(traitRoom12, 120, 120)

  //translate(-unit*1.5, 0)
  // Update xPanPosition and yPanPosition only when the mouse is pressed and moved
  if (isMousePressed) {
    // if (isFirstZoom) {
    //   translate(-unit*1.5/scaleFactor*10, 0)
    // }
    //translate(-unit*1.5/scaleFactor*10, 0)
    // // Adjust the translation to center on the zoomed-in view
    // translate(
    //   width / 2 - zoomCenterX * scaleFactor,
    //   height / 2 - zoomCenterY * scaleFactor
    // )
    let deltaX = mouseX - previousMouseX
    let deltaY = mouseY - previousMouseY
    xPanPosition += deltaX
    yPanPosition += deltaY
    // translate(-unit*1.5, 0)
  }

  push()

  translate(width / 2 + xPanPosition, height / 2 + yPanPosition)
  if (!isFirstZoom) {
    // Only apply translation and scaling when zoomed in
    translate(((-unit * 1.25) / scaleFactor) * 10, 0)
  }

  scale(scaleFactor / overallScale)

  //portrait format not activated so this is commented out
  // if (portraitFormat) {
  //   rotate(90)
  // }

  //frame layout elements
  push()
  fill(backgroundColor)
  stroke(200, 0, 100, 255)
  setLineDash([unit * 0.05, unit * 0.1])
  strokeWeight(strokeWeightThin * 2)
  rect(0, 0, unit * 12, unit * 9)
  pop()

  //background framing and edges
  fill(0, 0, 100, 255) //WHITE
  backEdgePanel(columnB, row02, unit, unit * 0.2)
  backEdgePanel(columnE, row02, unit, unit * 0.2)
  backEdgePanel(columnH, row02, unit, unit * 0.2)
  backEdgePanel(columnK, row02, unit, unit * 0.2)
  backEdgePanel(columnB, row05, unit, unit * 0.2)
  backEdgePanel(columnE, row05, unit, unit * 0.2)
  backEdgePanel(columnH, row05, unit, unit * 0.2)
  backEdgePanel(columnK, row05, unit, unit * 0.2)
  backEdgePanel(columnB, row08, unit, unit * 0.2)
  backEdgePanel(columnE, row08, unit, unit * 0.2)
  backEdgePanel(columnH, row08, unit, unit * 0.2)
  backEdgePanel(columnK, row08, unit, unit * 0.2)
  fill(0, 0, 0, 255) //BLACK
  backEdgePanel(columnB, row02, unit, unit * 0.18)
  backEdgePanel(columnE, row02, unit, unit * 0.18)
  backEdgePanel(columnH, row02, unit, unit * 0.18)
  backEdgePanel(columnK, row02, unit, unit * 0.18)
  backEdgePanel(columnB, row05, unit, unit * 0.18)
  backEdgePanel(columnE, row05, unit, unit * 0.18)
  backEdgePanel(columnH, row05, unit, unit * 0.18)
  backEdgePanel(columnK, row05, unit, unit * 0.18)
  backEdgePanel(columnB, row08, unit, unit * 0.18)
  backEdgePanel(columnE, row08, unit, unit * 0.18)
  backEdgePanel(columnH, row08, unit, unit * 0.18)
  backEdgePanel(columnK, row08, unit, unit * 0.18)

  //tabs
  foldedEdgesCollated(columnB, row08, unit)
  foldedEdgesCollated(columnE, row08, unit)
  foldedEdgesCollated(columnH, row08, unit)
  foldedEdgesCollated(columnK, row08, unit)
  foldedEdgesCollated(columnB, row05, unit)
  foldedEdgesCollated(columnE, row05, unit)
  foldedEdgesCollated(columnH, row05, unit)
  foldedEdgesCollated(columnK, row05, unit)
  foldedEdgesCollated(columnB, row02, unit)
  foldedEdgesCollated(columnE, row02, unit)
  foldedEdgesCollated(columnH, row02, unit)
  foldedEdgesCollated(columnK, row02, unit)

  //FLOORS
  floorBoards01(
    columnB,
    row08,
    unit,
    unit,
    floorBoardHList[1],
    floorBoardSList[1],
    floorBoardBList[1]
  )

  floorBoards01(
    columnE,
    row08,
    unit,
    unit,
    floorBoardHList[2],
    floorBoardSList[2],
    floorBoardBList[2]
  )

  floorBoards01(
    columnH,
    row08,
    unit,
    unit,
    floorBoardHList[3],
    floorBoardSList[3],
    floorBoardBList[3]
  )

  floorBoards01(
    columnK,
    row08,
    unit,
    unit,
    floorBoardHList[4],
    floorBoardSList[4],
    floorBoardBList[4]
  )

  floorBoards01(
    columnB,
    row05,
    unit,
    unit,
    floorBoardHList[5],
    floorBoardSList[5],
    floorBoardBList[5]
  )

  floorBoards01(
    columnE,
    row05,
    unit,
    unit,
    floorBoardHList[6],
    floorBoardSList[6],
    floorBoardBList[6]
  )

  floorBoards01(
    columnH,
    row05,
    unit,
    unit,
    floorBoardHList[7],
    floorBoardSList[7],
    floorBoardBList[7]
  )
  floorBoards01(
    columnK,
    row05,
    unit,
    unit,
    floorBoardHList[8],
    floorBoardSList[8],
    floorBoardBList[8]
  )

  floorBoards01(
    columnB,
    row02,
    unit,
    unit,
    floorBoardHList[9],
    floorBoardSList[9],
    floorBoardBList[9]
  )
  floorBoards01(
    columnE,
    row02,
    unit,
    unit,
    floorBoardHList[10],
    floorBoardSList[10],
    floorBoardBList[10]
  )
  floorBoards01(
    columnH,
    row02,
    unit,
    unit,
    floorBoardHList[11],
    floorBoardSList[11],
    floorBoardBList[11]
  )
  floorBoards01(
    columnK,
    row02,
    unit,
    unit,
    floorBoardHList[12],
    floorBoardSList[12],
    floorBoardBList[12]
  )

  //view angle icon
  push()
  translate(columnH, row05)
  rotate(-20)
  stroke(0, 20, 20, 255)
  strokeWeight(strokeWeightThin * 2)
  line(0 + unit * 0.35, 0 - unit * 0.1, 0, 0 + unit * 0.1)
  line(0 + unit * 0.35, 0 - unit * 0.1, 0, 0 - unit * 0.3)
  line(0 + unit * 0.4, 0 - unit * 0.1, 0 + unit * 0.3, 0 - unit * 0.1)
  line(0 + unit * 0.35, 0 - unit * 0.15, 0 + unit * 0.35, 0 - unit * 0.05)
  noFill()
  rect(0 + unit * 0.35, 0 - unit * 0.1, unit * 0.02)
  stroke(0, 0, 100, 255)
  strokeWeight(strokeWeightThin * 0.3)
  line(0 + unit * 0.35, 0 - unit * 0.1, 0, 0 + unit * 0.1)
  line(0 + unit * 0.35, 0 - unit * 0.1, 0, 0 - unit * 0.3)
  line(0 + unit * 0.4, 0 - unit * 0.1, 0 + unit * 0.3, 0 - unit * 0.1)
  line(0 + unit * 0.35, 0 - unit * 0.15, 0 + unit * 0.35, 0 - unit * 0.05)
  noFill()
  rect(0 + unit * 0.35, 0 - unit * 0.1, unit * 0.02)
  stroke(0, 20, 20, 255)
  strokeWeight(strokeWeightThin * 2)
  ellipse(0 + unit * 0.25, 0 - unit * 0.1, unit * 0.05, unit * 0.02)
  ellipse(0 + unit * 0.25, 0 - unit * 0.1, unit * 0.02)
  stroke(0, 0, 100, 255)
  strokeWeight(strokeWeightThin * 0.3)
  ellipse(0 + unit * 0.25, 0 - unit * 0.1, unit * 0.05, unit * 0.02)
  ellipse(0 + unit * 0.25, 0 - unit * 0.1, unit * 0.02)
  //fill(0, 20, 20, 255)
  // circle(0, 0 + unit * 0.1, unit * 0.005)
  // circle(0, 0 - unit * 0.3, unit * 0.005)
  pop()

  //doorswings
  push()
  translate(columnH, row05)

  pop()

  //trail on floor
  fill(colorOrangeScreen)
  noStroke()
  if (isSwitchOnRoom01) {
    //FIXED IN PAINTING
    mapTrails(columnB + unit * 0.25, row05, unit * 0.5, doorCentreW)
    mapTrails(columnB, row05, unit * 0.3, unit * 0.3)

    if (largeDoorB || centreDoorB) {
      mapTrails(columnB, row05 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnB, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorB) {
      mapTrails(
        columnB + panelGap,
        row05 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnB, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorB) {
      mapTrails(
        columnB - panelGap,
        row05 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnB, row05, unit * 0.3, unit * 0.3)
    }
    if (largeDoorA || centreDoorA) {
      mapTrails(columnB, row05 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnB, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorA) {
      mapTrails(
        columnB + panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnB, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorA) {
      mapTrails(
        columnB - panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnB, row05, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom02) {
    //FIXED IN PAINTING
    mapTrails(columnE + unit * 0.25, row05, unit * 0.5, doorCentreW)
    mapTrails(columnE - unit * 0.25, row05, unit * 0.5, doorCentreW)
    mapTrails(columnE, row05, unit * 0.3, unit * 0.3)

    if (largeDoorD || centreDoorD) {
      mapTrails(columnE, row05 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnE, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorD) {
      mapTrails(
        columnE + panelGap,
        row05 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnE, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorD) {
      mapTrails(
        columnE - panelGap,
        row05 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnE, row05, unit * 0.3, unit * 0.3)
    }
    if (largeDoorC || centreDoorC) {
      mapTrails(columnE, row05 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnE, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorC) {
      mapTrails(
        columnE + panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnE, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorC) {
      mapTrails(
        columnE - panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnE, row05, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom03) {
    //FIXED IN PAINTING
    mapTrails(columnH, row05 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(columnH - unit * 0.25, row05, unit * 0.5, doorCentreW)
    mapTrails(columnH, row05, unit * 0.3, unit * 0.3)

    if (largeDoorE || centreDoorE) {
      mapTrails(columnH, row05 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnH, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorE) {
      mapTrails(
        columnH + panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnH + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnH, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorE) {
      mapTrails(
        columnH - panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnH - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnH, row05, unit * 0.3, unit * 0.3)
    }
    if (largeDoorH || centreDoorH) {
      mapTrails(columnH + unit * 0.25, row05, unit * 0.5, doorCentreW)
      mapTrails(columnH, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorH) {
      mapTrails(
        columnH + unit * 0.25,
        row05 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row05 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorH) {
      mapTrails(
        columnH + unit * 0.25,
        row05 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row05 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row05, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom04) {
    if (largeDoorF || centreDoorF) {
      mapTrails(columnK, row05 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorF) {
      mapTrails(
        columnK + panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorF) {
      mapTrails(
        columnK - panelGap,
        row05 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (largeDoorH || centreDoorH) {
      mapTrails(columnK - unit * 0.25, row05, unit * 0.5, doorCentreW)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorH) {
      mapTrails(
        columnK - unit * 0.25,
        row05 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnK, row05 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorH) {
      mapTrails(
        columnK - unit * 0.25,
        row05 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnK, row05 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (largeDoorG || centreDoorG) {
      mapTrails(columnK, row05 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (leftDoorG) {
      mapTrails(
        columnK + panelGap,
        row05 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK + panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
    if (rightDoorG) {
      mapTrails(
        columnK - panelGap,
        row05 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK - panelGap / 2, row05, panelGap, doorCentreW)
      mapTrails(columnK, row05, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom05) {
    if (largeDoorB || centreDoorB) {
      mapTrails(columnB, row02 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnB, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorB) {
      mapTrails(
        columnB + panelGap,
        row02 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB + panelGap / 2, row02, panelGap, doorCentreW)
      mapTrails(columnB, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorB) {
      mapTrails(
        columnB - panelGap,
        row02 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB - panelGap / 2, row02, panelGap, doorCentreW)
      mapTrails(columnB, row02, unit * 0.3, unit * 0.3)
    }
    if (largeDoorK || centreDoorK) {
      mapTrails(columnB + unit * 0.25, row02, unit * 0.5, doorCentreW)
      mapTrails(columnB, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorK) {
      mapTrails(
        columnB + unit * 0.25,
        row02 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnB, row02 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnB, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorK) {
      mapTrails(
        columnB + unit * 0.25,
        row02 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnB, row02 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnB, row02, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom06) {
    if (largeDoorD || centreDoorD) {
      mapTrails(columnE, row02 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorD) {
      mapTrails(
        columnE + panelGap,
        row02 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE + panelGap / 2, row02, panelGap, doorCentreW)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorD) {
      mapTrails(
        columnE - panelGap,
        row02 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE - panelGap / 2, row02, panelGap, doorCentreW)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (largeDoorK || centreDoorK) {
      mapTrails(columnE - unit * 0.25, row02, unit * 0.5, doorCentreW)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorK) {
      mapTrails(
        columnE - unit * 0.25,
        row02 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row02 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorK) {
      mapTrails(
        columnE - unit * 0.25,
        row02 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row02 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (largeDoorJ || centreDoorJ) {
      mapTrails(columnE + unit * 0.25, row02, unit * 0.5, doorCentreW)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorJ) {
      mapTrails(
        columnE + unit * 0.25,
        row02 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row02 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorJ) {
      mapTrails(
        columnE + unit * 0.25,
        row02 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row02 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row02, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom07) {
    //FIXED IN PAINTING
    mapTrails(columnH, row02 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(columnH, row02, unit * 0.3, unit * 0.3)

    if (largeDoorJ || centreDoorJ) {
      mapTrails(columnH - unit * 0.25, row02, unit * 0.5, doorCentreW)
      mapTrails(columnH, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorJ) {
      mapTrails(
        columnH - unit * 0.25,
        row02 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row02 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorJ) {
      mapTrails(
        columnH - unit * 0.25,
        row02 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row02 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row02, unit * 0.3, unit * 0.3)
    }
    if (largeDoorI || centreDoorI) {
      mapTrails(columnH + unit * 0.25, row02, unit * 0.5, doorCentreW)
      mapTrails(columnH, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorI) {
      mapTrails(
        columnH + unit * 0.25,
        row02 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row02 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorI) {
      mapTrails(
        columnH + unit * 0.25,
        row02 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row02 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row02, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom08) {
    if (largeDoorG || centreDoorG) {
      mapTrails(columnK, row02 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnK, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorG) {
      mapTrails(
        columnK + panelGap,
        row02 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK + panelGap / 2, row02, panelGap, doorCentreW)
      mapTrails(columnK, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorG) {
      mapTrails(
        columnK - panelGap,
        row02 + unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK - panelGap / 2, row02, panelGap, doorCentreW)
      mapTrails(columnK, row02, unit * 0.3, unit * 0.3)
    }
    if (largeDoorI || centreDoorI) {
      mapTrails(columnK - unit * 0.25, row02, unit * 0.5, doorCentreW)
      mapTrails(columnK, row02, unit * 0.3, unit * 0.3)
    }
    if (leftDoorI) {
      mapTrails(
        columnK - unit * 0.25,
        row02 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnK, row02 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnK, row02, unit * 0.3, unit * 0.3)
    }
    if (rightDoorI) {
      mapTrails(
        columnK - unit * 0.25,
        row02 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnK, row02 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnK, row02, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom09) {
    if (largeDoorA || centreDoorA) {
      mapTrails(columnB, row08 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnB, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorA) {
      mapTrails(
        columnB + panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB + panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnB, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorA) {
      mapTrails(
        columnB - panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnB - panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnB, row08, unit * 0.3, unit * 0.3)
    }
    if (largeDoorL || centreDoorL) {
      mapTrails(columnB + unit * 0.25, row08, unit * 0.5, doorCentreW)
      mapTrails(columnB, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorL) {
      mapTrails(
        columnB + unit * 0.25,
        row08 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnB, row08 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnB, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorL) {
      mapTrails(
        columnB + unit * 0.25,
        row08 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnB, row08 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnB, row08, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom10) {
    if (largeDoorC || centreDoorC) {
      mapTrails(columnE, row08 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorC) {
      mapTrails(
        columnE + panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE + panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorC) {
      mapTrails(
        columnE - panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnE - panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (largeDoorM || centreDoorM) {
      mapTrails(columnE + unit * 0.25, row08, unit * 0.5, doorCentreW)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorM) {
      mapTrails(
        columnE + unit * 0.25,
        row08 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row08 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorM) {
      mapTrails(
        columnE + unit * 0.25,
        row08 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row08 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (largeDoorL || centreDoorL) {
      mapTrails(columnE - unit * 0.25, row08, unit * 0.5, doorCentreW)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorL) {
      mapTrails(
        columnE - unit * 0.25,
        row08 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row08 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorL) {
      mapTrails(
        columnE - unit * 0.25,
        row08 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnE, row08 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnE, row08, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom11) {
    if (largeDoorE || centreDoorE) {
      mapTrails(columnH, row08 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorE) {
      mapTrails(
        columnH + panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnH + panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorE) {
      mapTrails(
        columnH - panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnH - panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (largeDoorN || centreDoorN) {
      mapTrails(columnH + unit * 0.25, row08, unit * 0.5, doorCentreW)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorN) {
      mapTrails(
        columnH + unit * 0.25,
        row08 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row08 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorN) {
      mapTrails(
        columnH + unit * 0.25,
        row08 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row08 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (largeDoorM || centreDoorM) {
      mapTrails(columnH - unit * 0.25, row08, unit * 0.5, doorCentreW)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorM) {
      mapTrails(
        columnH - unit * 0.25,
        row08 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row08 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorM) {
      mapTrails(
        columnH - unit * 0.25,
        row08 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnH, row08 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnH, row08, unit * 0.3, unit * 0.3)
    }
  }
  if (isSwitchOnRoom12) {
    if (largeDoorF || centreDoorF) {
      mapTrails(columnK, row08 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(columnK, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorF) {
      mapTrails(
        columnK + panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK + panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnK, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorF) {
      mapTrails(
        columnK - panelGap,
        row08 - unit * 0.25,
        doorCentreW,
        unit * 0.5
      )
      mapTrails(columnK - panelGap / 2, row08, panelGap, doorCentreW)
      mapTrails(columnK, row08, unit * 0.3, unit * 0.3)
    }
    if (largeDoorN || centreDoorN) {
      mapTrails(columnK - unit * 0.25, row08, unit * 0.5, doorCentreW)
      mapTrails(columnK, row08, unit * 0.3, unit * 0.3)
    }
    if (leftDoorN) {
      mapTrails(
        columnK - unit * 0.25,
        row08 - panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnK, row08 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnK, row08, unit * 0.3, unit * 0.3)
    }
    if (rightDoorN) {
      mapTrails(
        columnK - unit * 0.25,
        row08 + panelGap,
        unit * 0.5,
        doorCentreW
      )
      mapTrails(columnK, row08 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(columnK, row08, unit * 0.3, unit * 0.3)
    }
  }

  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////  WALLS  ///////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///WALLS FIXED IN PAINTING
  push()
  translate(columnA, row05) //WINDOW //room 01
  rotate(east)
  //baseWallTemplate(unit)
  panelGList[1].panelGDraw()
  pop()

  push()
  translate(columnC, row05) //room 01
  rotate(west)
  //baseWallTemplate(unit)
  panelDList[1].panelDDraw()
  if (isSwitchOnRoom01) {
    noStroke()
    fill(colorBlueScreen)
    mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
  }
  pop()

  push()
  translate(columnD, row05) //room 02
  rotate(east)
  //baseWallTemplate(unit)
  panelDList[2].panelDDraw()
  if (isSwitchOnRoom02) {
    noStroke()
    fill(colorBlueScreen)
    mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
  }
  pop()

  push()
  translate(columnF, row05) // room 02
  rotate(west)
  baseWallTemplate(unit)
  panelDList[3].panelDDraw()
  if (isSwitchOnRoom02) {
    noStroke()
    fill(colorBlueScreen)
    mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
  }
  pop()

  push()
  translate(columnG, row05) //room 03
  rotate(east)
  baseWallTemplate(unit)
  panelDList[4].panelDDraw()
  if (isSwitchOnRoom03) {
    noStroke()
    fill(colorBlueScreen)
    mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
  }
  pop()

  push()
  translate(columnH, row03)
  rotate(south)
  baseWallTemplate(unit)
  panelDList[5].panelDDraw()
  if (isSwitchOnRoom07) {
    noStroke()
    fill(colorBlueScreen)
    mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
  }
  pop()

  push()
  translate(columnH, row04)
  rotate(north)
  baseWallTemplate(unit)
  panelDList[6].panelDDraw()
  if (isSwitchOnRoom03) {
    noStroke()
    fill(colorBlueScreen)
    mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
  }
  pop()

  //WALLS HIDDEN IN PAINTING
  //WALLS A
  push()
  translate(columnB, row06) //navigate room 01
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelA) {
    panelCList[1].panelCDraw()
  }
  if (onePanelA) {
    panelBList[1].panelBDraw()
  }
  if (largeDoorA) {
    panelAList[1].panelADraw()
  }
  if (centreDoorA) {
    panelDList[1].panelDDraw()
  }
  if (leftDoorA) {
    panelEList[1].panelEDraw()
  }
  if (rightDoorA) {
    panelFList[1].panelFDraw()
  }
  if (isSwitchOnRoom01) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorA) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorA) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorA) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorA) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnB, row07) //navigate room 09
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelA) {
    panelCList[2].panelCDraw()
  }
  if (onePanelA) {
    panelCList[2].panelCDraw()
  }
  if (largeDoorA) {
    panelAList[2].panelADraw()
  }
  if (centreDoorA) {
    panelDList[2].panelDDraw()
  }
  if (leftDoorA) {
    panelFList[2].panelFDraw()
  }
  if (rightDoorA) {
    panelEList[2].panelEDraw()
  }
  if (isSwitchOnRoom09) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorA) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorA) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorA) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorA) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS B
  push()
  translate(columnB, row03) //navigate room 05
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelB) {
    panelCList[3].panelCDraw()
  }
  if (onePanelB) {
    panelBList[3].panelBDraw()
  }
  if (largeDoorB) {
    panelAList[3].panelADraw()
  }
  if (centreDoorB) {
    panelDList[3].panelDDraw()
  }
  if (leftDoorB) {
    panelEList[3].panelEDraw()
  }
  if (rightDoorB) {
    panelFList[3].panelFDraw()
  }
  if (isSwitchOnRoom05) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorB) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorB) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorB) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorB) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnB, row04) //navigate room 01
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelB) {
    panelCList[4].panelCDraw()
  }
  if (onePanelB) {
    panelBList[4].panelBDraw()
  }
  if (largeDoorB) {
    panelAList[4].panelADraw()
  }
  if (centreDoorB) {
    panelDList[4].panelDDraw()
  }
  if (leftDoorB) {
    panelFList[4].panelFDraw()
  }
  if (rightDoorB) {
    panelEList[4].panelEDraw()
  }
  if (isSwitchOnRoom01) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorB) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorB) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorB) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorB) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS C
  push()
  translate(columnE, row06) //navigate room 02
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelC) {
    panelCList[5].panelCDraw()
  }
  if (onePanelC) {
    panelBList[5].panelBDraw()
  }
  if (largeDoorC) {
    panelAList[5].panelADraw()
  }
  if (centreDoorC) {
    panelDList[5].panelDDraw()
  }
  if (leftDoorC) {
    panelEList[5].panelEDraw()
  }
  if (rightDoorC) {
    panelFList[5].panelFDraw()
  }
  if (isSwitchOnRoom02) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorC) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorC) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorC) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorC) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnE, row07) //navigate room 10
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelC) {
    panelCList[6].panelCDraw()
  }
  if (onePanelC) {
    panelBList[6].panelBDraw()
  }
  if (largeDoorC) {
    panelAList[6].panelADraw()
  }
  if (centreDoorC) {
    panelDList[6].panelDDraw()
  }
  if (leftDoorC) {
    panelFList[6].panelFDraw()
  }
  if (rightDoorC) {
    panelEList[6].panelEDraw()
  }
  if (isSwitchOnRoom10) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorC) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorC) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorC) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorC) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS D
  push()
  translate(columnE, row03) //navigate room 06
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelD) {
    panelCList[7].panelCDraw()
  }
  if (onePanelD) {
    panelCList[7].panelCDraw()
  }
  if (largeDoorD) {
    panelAList[7].panelADraw()
  }
  if (centreDoorD) {
    panelDList[7].panelDDraw()
  }
  if (leftDoorD) {
    panelEList[7].panelEDraw()
  }
  if (rightDoorD) {
    panelFList[7].panelFDraw()
  }
  if (isSwitchOnRoom06) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorD) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorD) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorD) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorD) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnE, row04) //navigate room 02
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelD) {
    panelCList[8].panelCDraw()
  }
  if (onePanelD) {
    panelBList[8].panelBDraw()
  }
  if (largeDoorD) {
    panelAList[8].panelADraw()
  }
  if (centreDoorD) {
    panelDList[8].panelDDraw()
  }
  if (leftDoorD) {
    panelFList[8].panelFDraw()
  }
  if (rightDoorD) {
    panelEList[8].panelEDraw()
  }
  if (isSwitchOnRoom02) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorD) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorD) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorD) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorD) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS E
  push()
  translate(columnH, row06) //navigate room 03
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelE) {
    panelCList[9].panelCDraw()
  }
  if (onePanelE) {
    panelCList[9].panelCDraw()
  }
  if (largeDoorE) {
    panelAList[9].panelADraw()
  }
  if (centreDoorE) {
    panelDList[9].panelDDraw()
  }
  if (leftDoorE) {
    panelEList[9].panelEDraw()
  }
  if (rightDoorE) {
    panelFList[9].panelFDraw()
  }
  if (isSwitchOnRoom03) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorE) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorE) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorE) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorE) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnH, row07) //navigate room 11
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelE) {
    panelCList[10].panelCDraw()
  }
  if (onePanelE) {
    panelBList[10].panelBDraw()
  }
  if (largeDoorE) {
    panelAList[10].panelADraw()
  }
  if (centreDoorE) {
    panelDList[10].panelDDraw()
  }
  if (leftDoorE) {
    panelFList[10].panelFDraw()
  }
  if (rightDoorE) {
    panelEList[10].panelEDraw()
  }
  if (isSwitchOnRoom11) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorE) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorE) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorE) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorE) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS F
  push()
  translate(columnK, row06) //navigate room 04
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelF) {
    panelBList[11].panelBDraw()
  }
  if (onePanelF) {
    panelCList[11].panelCDraw()
  }
  if (largeDoorF) {
    panelAList[11].panelADraw()
  }
  if (centreDoorF) {
    panelDList[11].panelDDraw()
  }
  if (leftDoorF) {
    panelEList[11].panelEDraw()
  }
  if (rightDoorF) {
    panelFList[11].panelFDraw()
  }
  if (isSwitchOnRoom04) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorF) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorF) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorF) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorF) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnK, row07) //navigate room 12
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelF) {
    panelCList[12].panelCDraw()
  }
  if (onePanelF) {
    panelBList[12].panelBDraw()
  }
  if (largeDoorF) {
    panelAList[12].panelADraw()
  }
  if (centreDoorF) {
    panelDList[12].panelDDraw()
  }
  if (leftDoorF) {
    panelFList[12].panelFDraw()
  }
  if (rightDoorF) {
    panelEList[12].panelEDraw()
  }
  if (isSwitchOnRoom12) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorF) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorF) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorF) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorF) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS G
  push()
  translate(columnK, row03) //NAVIGATE ROOM 08
  rotate(south)
  baseWallTemplate(unit)
  if (threePanelG) {
    panelBList[13].panelBDraw()
  }
  if (onePanelG) {
    panelCList[13].panelCDraw()
  }
  if (largeDoorG) {
    panelAList[13].panelADraw()
  }
  if (centreDoorG) {
    panelDList[13].panelDDraw()
  }
  if (leftDoorG) {
    panelEList[13].panelEDraw()
  }
  if (rightDoorG) {
    panelFList[13].panelFDraw()
  }
  if (isSwitchOnRoom08) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorG) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorG) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorG) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorG) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnK, row04) //NAVIGATE ROOM 04
  rotate(north)
  baseWallTemplate(unit)
  if (threePanelG) {
    panelCList[14].panelCDraw()
  }
  if (onePanelG) {
    panelBList[14].panelBDraw()
  }
  if (largeDoorG) {
    panelAList[14].panelADraw()
  }
  if (centreDoorG) {
    panelDList[14].panelDDraw()
  }
  if (leftDoorG) {
    panelFList[14].panelFDraw()
  }
  if (rightDoorG) {
    panelEList[14].panelEDraw()
  }
  if (isSwitchOnRoom04) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorG) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorG) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorG) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorG) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS H
  push()
  translate(columnI, row05) //NAVIGATE ROOM 03
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelH) {
    panelBList[15].panelBDraw()
  }
  if (onePanelH) {
    panelCList[15].panelCDraw()
  }
  if (largeDoorH) {
    panelAList[15].panelADraw()
  }
  if (centreDoorH) {
    panelDList[15].panelDDraw()
  }
  if (leftDoorH) {
    panelEList[15].panelEDraw()
  }
  if (rightDoorH) {
    panelFList[15].panelFDraw()
  }
  if (isSwitchOnRoom03) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorH) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorH) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorH) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorH) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnJ, row05) //NAVIGATE ROOM 04
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelH) {
    panelCList[16].panelCDraw()
  }
  if (onePanelH) {
    panelBList[16].panelBDraw()
  }
  if (largeDoorH) {
    panelAList[16].panelADraw()
  }
  if (centreDoorH) {
    panelDList[16].panelDDraw()
  }
  if (leftDoorH) {
    panelFList[16].panelFDraw()
  }
  if (rightDoorH) {
    panelEList[16].panelEDraw()
  }
  if (isSwitchOnRoom04) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorH) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorH) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorH) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorH) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS I
  push()
  translate(columnI, row02) //NAVIGATE ROOM 07
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelI) {
    panelBList[17].panelBDraw()
  }
  if (onePanelI) {
    panelCList[17].panelCDraw()
  }
  if (largeDoorI) {
    panelAList[17].panelADraw()
  }
  if (centreDoorI) {
    panelDList[17].panelDDraw()
  }
  if (leftDoorI) {
    panelEList[17].panelEDraw()
  }
  if (rightDoorI) {
    panelFList[17].panelFDraw()
  }
  if (isSwitchOnRoom07) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorI) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorI) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorI) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorI) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnJ, row02) //NAVIGATE ROOM 08
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelI) {
    panelCList[18].panelCDraw()
  }
  if (onePanelI) {
    panelBList[18].panelBDraw()
  }
  if (largeDoorI) {
    panelAList[18].panelADraw()
  }
  if (centreDoorI) {
    panelDList[18].panelDDraw()
  }
  if (leftDoorI) {
    panelFList[18].panelFDraw()
  }
  if (rightDoorI) {
    panelEList[18].panelEDraw()
  }
  if (isSwitchOnRoom08) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorI) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorI) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorI) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorI) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS J
  push()
  translate(columnF, row02) //NAVIGATE ROOM 06
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelJ) {
    panelBList[19].panelBDraw()
  }
  if (onePanelJ) {
    panelCList[19].panelCDraw()
  }
  if (largeDoorJ) {
    panelAList[19].panelADraw()
  }
  if (centreDoorJ) {
    panelDList[19].panelDDraw()
  }
  if (leftDoorJ) {
    panelEList[19].panelEDraw()
  }
  if (rightDoorJ) {
    panelFList[19].panelFDraw()
  }
  if (isSwitchOnRoom06) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorJ) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorJ) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorJ) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorJ) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnG, row02) //NAVIGATE ROOM 07
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelJ) {
    panelCList[20].panelCDraw()
  }
  if (onePanelJ) {
    panelBList[20].panelBDraw()
  }
  if (largeDoorJ) {
    panelAList[20].panelADraw()
  }
  if (centreDoorJ) {
    panelDList[20].panelDDraw()
  }
  if (leftDoorJ) {
    panelFList[20].panelFDraw()
  }
  if (rightDoorJ) {
    panelEList[20].panelEDraw()
  }
  if (isSwitchOnRoom07) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorJ) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorJ) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorJ) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorJ) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS K
  push()
  translate(columnC, row02) //NAVIGATE ROOM 05
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelK) {
    panelBList[21].panelBDraw()
  }
  if (onePanelK) {
    panelCList[21].panelCDraw()
  }
  if (largeDoorK) {
    panelAList[21].panelADraw()
  }
  if (centreDoorK) {
    panelDList[21].panelDDraw()
  }
  if (leftDoorK) {
    panelEList[21].panelEDraw()
  }
  if (rightDoorK) {
    panelFList[21].panelFDraw()
  }
  if (isSwitchOnRoom05) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorK) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorK) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorK) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorK) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnD, row02) //NAVIGATE ROOM 06
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelK) {
    panelCList[22].panelCDraw()
  }
  if (onePanelK) {
    panelBList[22].panelBDraw()
  }
  if (largeDoorK) {
    panelAList[22].panelADraw()
  }
  if (centreDoorK) {
    panelDList[22].panelDDraw()
  }
  if (leftDoorK) {
    panelFList[22].panelFDraw()
  }
  if (rightDoorK) {
    panelEList[22].panelEDraw()
  }
  if (isSwitchOnRoom06) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorK) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorK) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorK) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorK) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS L
  push()
  translate(columnC, row08) //NAVIGATE ROOM 09
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelL) {
    panelCList[23].panelCDraw()
  }
  if (onePanelL) {
    panelBList[23].panelBDraw()
  }
  if (largeDoorL) {
    panelAList[23].panelADraw()
  }
  if (centreDoorL) {
    panelDList[23].panelDDraw()
  }
  if (leftDoorL) {
    panelEList[23].panelEDraw()
  }
  if (rightDoorL) {
    panelFList[23].panelFDraw()
  }
  if (isSwitchOnRoom09) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorL) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorL) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorL) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorL) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnD, row08) //NAVIGATE ROOM 10
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelL) {
    panelBList[24].panelBDraw()
  }
  if (onePanelL) {
    panelCList[24].panelCDraw()
  }
  if (largeDoorL) {
    panelAList[24].panelADraw()
  }
  if (centreDoorL) {
    panelDList[24].panelDDraw()
  }
  if (leftDoorL) {
    panelFList[24].panelFDraw()
  }
  if (rightDoorL) {
    panelEList[24].panelEDraw()
  }
  if (isSwitchOnRoom10) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorL) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorL) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorL) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorL) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS M
  push()
  translate(columnF, row08) //NAVIGATE ROOM 10
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelM) {
    panelCList[25].panelCDraw()
  }
  if (onePanelM) {
    panelBList[25].panelBDraw()
  }
  if (largeDoorM) {
    panelAList[25].panelADraw()
  }
  if (centreDoorM) {
    panelDList[25].panelDDraw()
  }
  if (leftDoorM) {
    panelEList[25].panelEDraw()
  }
  if (rightDoorM) {
    panelFList[25].panelFDraw()
  }
  if (isSwitchOnRoom10) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorM) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorM) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorM) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorM) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnG, row08) //NAVIGATE ROOM 11
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelM) {
    panelBList[26].panelBDraw()
  }
  if (onePanelM) {
    panelCList[26].panelCDraw()
  }
  if (largeDoorM) {
    panelAList[26].panelADraw()
  }
  if (centreDoorM) {
    panelDList[26].panelDDraw()
  }
  if (leftDoorM) {
    panelFList[26].panelFDraw()
  }
  if (rightDoorM) {
    panelEList[26].panelEDraw()
  }
  if (isSwitchOnRoom11) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorM) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorM) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorM) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorM) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //WALLS N
  push()
  translate(columnI, row08) //NAVIGATE ROOM 11
  rotate(west)
  baseWallTemplate(unit)
  if (threePanelN) {
    panelCList[27].panelCDraw()
  }
  if (onePanelN) {
    panelBList[27].panelBDraw()
  }
  if (largeDoorN) {
    panelAList[27].panelADraw()
  }
  if (centreDoorN) {
    panelDList[27].panelDDraw()
  }
  if (leftDoorN) {
    panelEList[27].panelEDraw()
  }
  if (rightDoorN) {
    panelFList[27].panelFDraw()
  }
  if (isSwitchOnRoom11) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorN) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorN) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorN) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
    if (rightDoorN) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
  }
  pop()

  push()
  translate(columnJ, row08) //NAVIGATE ROOM 12
  rotate(east)
  baseWallTemplate(unit)
  if (threePanelN) {
    panelBList[28].panelBDraw()
  }
  if (onePanelN) {
    panelCList[28].panelCDraw()
  }
  if (largeDoorN) {
    panelAList[28].panelADraw()
  }
  if (centreDoorN) {
    panelDList[28].panelDDraw()
  }
  if (leftDoorN) {
    panelFList[28].panelFDraw()
  }
  if (rightDoorN) {
    panelEList[28].panelEDraw()
  }
  if (isSwitchOnRoom12) {
    noStroke()
    fill(colorBlueScreen)
    if (largeDoorN) {
      mapTrailsDoors(doorLargeX, doorLargeY, doorLargeW, doorLargeH)
    }
    if (centreDoorN) {
      mapTrailsDoors(doorCentreX, doorCentreY, doorCentreW, doorCentreH)
    }
    if (leftDoorN) {
      mapTrailsDoors(doorRightX, doorRightY, doorRightW, doorRightH)
    }
    if (rightDoorN) {
      mapTrailsDoors(doorLeftX, doorLeftY, doorLeftW, doorLeftH)
    }
  }
  pop()

  //EXTERNAL WALLS
  //EXT WALL A
  push()
  translate(columnA, row08)
  rotate(east)
  baseWallTemplate(unit)
  if (extASelect >= 0 && extASelect < 1) {
    panelBList[29].panelBDraw()
  }
  if (extASelect >= 1 && extASelect < 2) {
    panelCList[29].panelCDraw()
  }
  if (extASelect >= 2 && extASelect <= 3) {
    panelGList[29].panelGDraw()
  }
  pop()
  //EXT WALL B
  push()
  translate(columnB, row09)
  rotate(south)
  baseWallTemplate(unit)
  if (extBSelect >= 0 && extBSelect < 1) {
    panelBList[30].panelBDraw()
  }
  if (extBSelect >= 1 && extBSelect < 2) {
    panelCList[30].panelCDraw()
  }
  if (extBSelect >= 2 && extBSelect <= 3) {
    panelGList[30].panelGDraw()
  }
  pop()
  //EXT WALL C
  push()
  translate(columnE, row09)
  rotate(south)
  baseWallTemplate(unit)
  if (extCSelect >= 0 && extCSelect < 1) {
    panelBList[31].panelBDraw()
  }
  if (extCSelect >= 1 && extCSelect < 2) {
    panelCList[31].panelCDraw()
  }
  if (extCSelect >= 2 && extCSelect <= 3) {
    panelGList[31].panelGDraw()
  }
  pop()
  //EXT WALL D
  push()
  translate(columnH, row09)
  rotate(south)
  baseWallTemplate(unit)
  if (extDSelect >= 0 && extDSelect < 1) {
    panelBList[32].panelBDraw()
  }
  if (extDSelect >= 1 && extDSelect < 2) {
    panelCList[32].panelCDraw()
  }
  if (extDSelect >= 2 && extDSelect <= 3) {
    panelGList[32].panelGDraw()
  }
  pop()
  //EXT WALL E
  push()
  translate(columnK, row09)
  rotate(south)
  baseWallTemplate(unit)
  if (extESelect >= 0 && extESelect < 1) {
    panelBList[33].panelBDraw()
  }
  if (extESelect >= 1 && extESelect < 2) {
    panelCList[33].panelCDraw()
  }
  if (extESelect >= 2 && extESelect <= 3) {
    panelGList[33].panelGDraw()
  }
  pop()
  //EXT WALL F
  push()
  translate(columnL, row08)
  rotate(west)
  baseWallTemplate(unit)
  if (extFSelect >= 0 && extFSelect < 1) {
    panelBList[34].panelBDraw()
  }
  if (extFSelect >= 1 && extFSelect < 2) {
    panelCList[34].panelCDraw()
  }
  if (extFSelect >= 2 && extFSelect <= 3) {
    panelGList[34].panelGDraw()
  }
  pop()
  //EXT WALL G
  push()
  translate(columnL, row05)
  rotate(west)
  baseWallTemplate(unit)
  if (extGSelect >= 0 && extGSelect < 1) {
    panelBList[35].panelBDraw()
  }
  if (extGSelect >= 1 && extGSelect < 2) {
    panelCList[35].panelCDraw()
  }
  if (extGSelect >= 2 && extGSelect <= 3) {
    panelGList[35].panelGDraw()
  }
  pop()
  //EXT WALL H
  push()
  translate(columnL, row02)
  rotate(west)
  baseWallTemplate(unit)
  if (extHSelect >= 0 && extHSelect < 1) {
    panelBList[36].panelBDraw()
  }
  if (extHSelect >= 1 && extHSelect < 2) {
    panelCList[36].panelCDraw()
  }
  if (extHSelect >= 2 && extHSelect <= 3) {
    panelGList[36].panelGDraw()
  }
  pop()
  //EXT WALL I
  push()
  translate(columnK, row01)
  rotate(north)
  baseWallTemplate(unit)
  if (extISelect >= 0 && extISelect < 1) {
    panelBList[37].panelBDraw()
  }
  if (extISelect >= 1 && extISelect < 2) {
    panelCList[37].panelCDraw()
  }
  if (extISelect >= 2 && extISelect <= 3) {
    panelGList[37].panelGDraw()
  }
  pop()
  //EXT WALL J
  push()
  translate(columnH, row01)
  rotate(north)
  baseWallTemplate(unit)
  if (extJSelect >= 0 && extJSelect < 1) {
    panelBList[38].panelBDraw()
  }
  if (extJSelect >= 1 && extJSelect < 2) {
    panelCList[38].panelCDraw()
  }
  if (extJSelect >= 2 && extJSelect <= 3) {
    panelGList[38].panelGDraw()
  }
  pop()
  //EXT WALL K
  push()
  translate(columnE, row01)
  rotate(north)
  baseWallTemplate(unit)
  if (extKSelect >= 0 && extKSelect < 1) {
    panelBList[39].panelBDraw()
  }
  if (extKSelect >= 1 && extKSelect < 2) {
    panelCList[39].panelCDraw()
  }
  if (extKSelect >= 2 && extKSelect <= 3) {
    panelGList[39].panelGDraw()
  }
  pop()
  //EXT WALL L
  push()
  translate(columnB, row01)
  rotate(north)
  baseWallTemplate(unit)
  if (extLSelect >= 0 && extLSelect < 1) {
    panelBList[1].panelBDraw()
  }
  if (extLSelect >= 1 && extLSelect < 2) {
    panelCList[1].panelCDraw()
  }
  if (extLSelect >= 2 && extLSelect <= 3) {
    panelGList[1].panelGDraw()
  }
  pop()
  //EXT WALL M
  push()
  translate(columnA, row02)
  rotate(east)
  baseWallTemplate(unit)
  if (extMSelect >= 0 && extMSelect < 1) {
    panelBList[2].panelBDraw()
  }
  if (extMSelect >= 1 && extMSelect < 2) {
    panelCList[2].panelCDraw()
  }
  if (extMSelect >= 2 && extMSelect <= 3) {
    panelGList[2].panelGDraw()
  }
  pop()

  ///RULES FOR ROOMS IN DARKNESS
  //dark room 04
  if (wallsHSelect < 2 && wallsGSelect < 2 && wallsFSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnK, row05, unit)
    rect(columnK, row04, unit)
    rect(columnK, row06, unit)
    rect(columnJ, row05, unit)
    rect(columnL, row05, unit)
  }
  //dark room 05
  if (wallsBSelect < 2 && wallsKSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnB, row01, unit)
    rect(columnB, row02, unit)
    rect(columnB, row03, unit)
    rect(columnA, row02, unit)
    rect(columnC, row02, unit)
  }
  //dark room 06
  if (wallsDSelect < 2 && wallsJSelect < 2 && wallsKSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnE, row01, unit)
    rect(columnE, row02, unit)
    rect(columnE, row03, unit)
    rect(columnD, row02, unit)
    rect(columnF, row02, unit)
  }
  //dark room 08
  if (wallsGSelect < 2 && wallsISelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnK, row01, unit)
    rect(columnK, row02, unit)
    rect(columnK, row03, unit)
    rect(columnJ, row02, unit)
    rect(columnL, row02, unit)
  }
  //dark room 09
  if (wallsASelect < 2 && wallsLSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnB, row07, unit)
    rect(columnB, row08, unit)
    rect(columnB, row09, unit)
    rect(columnA, row08, unit)
    rect(columnC, row08, unit)
  }
  //dark room 10
  if (wallsCSelect < 2 && wallsLSelect < 2 && wallsMSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnE, row07, unit)
    rect(columnE, row08, unit)
    rect(columnE, row09, unit)
    rect(columnD, row08, unit)
    rect(columnF, row08, unit)
  }
  //dark room 11
  if (wallsESelect < 2 && wallsMSelect < 2 && wallsNSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnH, row07, unit)
    rect(columnH, row08, unit)
    rect(columnH, row09, unit)
    rect(columnG, row08, unit)
    rect(columnI, row08, unit)
  }
  //dark room 12
  if (wallsFSelect < 2 && wallsNSelect < 2) {
    fill(250, 50, 10, 150)
    rect(columnK, row07, unit)
    rect(columnK, row08, unit)
    rect(columnK, row09, unit)
    rect(columnJ, row08, unit)
    rect(columnL, row08, unit)
  }
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////  PAINTINGS  ///////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  push()
  setLineDash([unit * 0.05, unit * 0.05])
  stroke(10, 60, 90, 255)
  strokeWeight(unit * 0.01)
  //room 03 to room 02
  line(room02PaintingX, room02PaintingY, room03PaintingX, room02PaintingY)
  line(room03PaintingX, room02PaintingY, room03PaintingX, room03PaintingY)
  //room 01 to room 02
  line(room01PaintingX, room01PaintingY, room02PaintingX, room01PaintingY)
  line(room02PaintingX, room01PaintingY, room02PaintingX, room02PaintingY)
  //room 01 to room 09
  line(room01PaintingX, room01PaintingY, room09PaintingX, room01PaintingY)
  line(room09PaintingX, room01PaintingY, room09PaintingX, room09PaintingY)
  //room 09 to room 10
  line(room09PaintingX, room09PaintingY, room10PaintingX, room09PaintingY)
  line(room10PaintingX, room09PaintingY, room10PaintingX, room10PaintingY)
  //room 10 to room 11
  line(room10PaintingX, room10PaintingY, room11PaintingX, room10PaintingY)
  line(room11PaintingX, room10PaintingY, room11PaintingX, room11PaintingY)
  //room 11 to room 12
  line(room11PaintingX, room11PaintingY, room12PaintingX, room11PaintingY)
  line(room12PaintingX, room11PaintingY, room12PaintingX, room12PaintingY)
  //room 12 to room 04
  line(room12PaintingX, room12PaintingY, room04PaintingX, room12PaintingY)
  line(room04PaintingX, room12PaintingY, room04PaintingX, room04PaintingY)
  //room 04 to room 08
  line(room04PaintingX, room04PaintingY, room08PaintingX, room04PaintingY)
  line(room08PaintingX, room04PaintingY, room08PaintingX, room08PaintingY)
  //room 08 to room 07
  line(room08PaintingX, room08PaintingY, room07PaintingX, room08PaintingY)
  line(room07PaintingX, room08PaintingY, room07PaintingX, room07PaintingY)
  //room 07 to room 06
  line(room07PaintingX, room07PaintingY, room06PaintingX, room07PaintingY)
  line(room06PaintingX, room07PaintingY, room06PaintingX, room06PaintingY)
  //room 06 to room 05
  line(room06PaintingX, room06PaintingY, room05PaintingX, room06PaintingY)
  line(room05PaintingX, room06PaintingY, room05PaintingX, room05PaintingY)

  paintingElement(room01PaintingX, room01PaintingY, unit / overallScale)
  paintingElement(room02PaintingX, room02PaintingY, unit / overallScale)
  paintingElement(room03PaintingX, room03PaintingY, unit / overallScale)
  paintingElement(room04PaintingX, room04PaintingY, unit / overallScale)
  paintingElement(room05PaintingX, room05PaintingY, unit / overallScale)
  paintingElement(room06PaintingX, room06PaintingY, unit / overallScale)
  paintingElement(room07PaintingX, room07PaintingY, unit / overallScale)
  paintingElement(room08PaintingX, room08PaintingY, unit / overallScale)
  paintingElement(room09PaintingX, room09PaintingY, unit / overallScale)
  paintingElement(room10PaintingX, room10PaintingY, unit / overallScale)
  paintingElement(room11PaintingX, room11PaintingY, unit / overallScale)
  paintingElement(room12PaintingX, room12PaintingY, unit / overallScale)

  // //painting words
  // textFont('monospace', unit*0.02)
  // fill(0, 0, 100, 255)
  // noStroke()
  // push()
  // translate(room04PaintingX, room04PaintingY)

  // rotate(east)
  // //text(randomObjectRoom04, 0, 0, unit/overallScale, unit/overallScale)
  // pop()

  fill(30, 100, 100, 200)
  pop()
  // textSize(2500)
  //   text(zoomInValue, width/2, height/2)

  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////  FURNITURE  ///////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  //furniture draw rooms 01-03
  push()
  translate(columnB, row05) //room 01
  rotate(north)
  if (room01TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture01].furnitureDraw()
  }
  rotate(east)
  if (room01BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture01 + 1].furnitureDraw()
  }
  rotate(south)
  if (room01TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture01 + 2].furnitureDraw()
  }
  rotate(west)
  if (room01BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture01 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnE, row05) //room 02
  rotate(north)
  // if (room01TLFurnitureSelect > furnitureYES) {
  //   furnitureList[indexFurniture01].furnitureDraw()
  // }
  rotate(east)
  if (room02BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture02 + 1].furnitureDraw()
  }
  rotate(south)
  furnitureList[indexFurniture02 + 2].furnitureDraw() //WOMAN

  rotate(west)
  if (room02BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture02 + 3].furnitureDraw()
  }
  rotate(south)
  // fill(0, 0, 100, 255)
  // rect(0 + unit * 0.25, 0 - unit * 0.25, unit * 0.17, unit * 0.1)
  // fill(0, 0, 0, 255)
  // textFont('monospace', unit * 0.03)
  // text('I D A', 0 + unit * 0.25, 0 - unit * 0.27)
  // text('( T O P )', 0 + unit * 0.25, 0 - unit * 0.23)
  // rotate(90)
  // text('I D A', 0 - unit * 0.33, 0 - unit * 0.6)
  // text('( F R O N T )', 0 - unit * 0.33, 0 - unit * 0.56)
  // rotate(270)
  // text('I D A', 0 + unit * 0.37, 0 - unit * 0.6)
  // text('( S I D E )', 0 + unit * 0.37, 0 - unit * 0.56)
  pop()

  push()
  translate(columnH, row05) //room 03
  rotate(north)
  // if (room01TLFurnitureSelect > furnitureYES) {
  //   furnitureList[indexFurniture01].furnitureDraw()
  // }
  rotate(east)

  furnitureList[indexFurniture03 + 1].furnitureDraw()

  rotate(south)
  // if (room01TRFurnitureSelect > furnitureYES) {
  //   furnitureList[indexFurniture01 + 2].furnitureDraw()
  // }
  rotate(west)
  if (room03BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture03 + 2].furnitureDraw()
  }
  rotate(south)
  // fill(0, 0, 100, 255)
  // rect(0 - unit * 0.25, 0 + unit * 0.25, unit * 0.2, unit * 0.1)
  // fill(0, 0, 0, 255)
  // textFont('monospace', unit * 0.03)
  // text('C H A I R', 0 - unit * 0.25, 0 + unit * 0.23)
  // text('( T O P )', 0 - unit * 0.25, 0 + unit * 0.27)
  // rotate(270)
  // text('C H A I R', 0 - unit * 0.33, 0 - unit * 0.6)
  // text('( F R O N T )', 0 - unit * 0.33, 0 - unit * 0.56)
  // rotate(270)
  // text('C H A I R', 0 + unit * 0.37, 0 - unit * 0.6)
  // text('( S I D E )', 0 + unit * 0.37, 0 - unit * 0.56)
  pop()

  //furniture draw random rooms 04-12
  push()
  translate(columnE, row08) //room 10
  rotate(north)
  if (room04TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture04].furnitureDraw()
  }
  rotate(east)
  if (room04BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture04 + 1].furnitureDraw()
  }
  rotate(south)
  if (room04TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture04 + 2].furnitureDraw()
  }
  rotate(west)
  if (room04BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture04 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnH, row08) //room 11
  rotate(north)
  if (room05TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture05].furnitureDraw()
  }
  rotate(east)
  if (room05BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture05 + 1].furnitureDraw()
  }
  rotate(south)
  if (room05TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture05 + 2].furnitureDraw()
  }
  rotate(west)
  if (room05BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture05 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnK, row08) //room 12
  rotate(north)
  if (room06TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture06].furnitureDraw()
  }
  rotate(east)
  if (room06BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture06 + 1].furnitureDraw()
  }
  rotate(south)
  if (room06TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture06 + 2].furnitureDraw()
  }
  rotate(west)
  if (room06BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture06 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnK, row05) //room 04
  rotate(north)
  if (room07TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture07].furnitureDraw()
  }
  rotate(east)
  if (room07BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture07 + 1].furnitureDraw()
  }
  rotate(south)
  if (room07TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture07 + 2].furnitureDraw()
  }
  rotate(west)
  if (room07BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture07 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnK, row02) //room 08
  rotate(north)
  if (room08TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture08].furnitureDraw()
  }
  rotate(east)
  if (room08BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture08 + 1].furnitureDraw()
  }
  rotate(south)
  if (room08TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture08 + 2].furnitureDraw()
  }
  rotate(west)
  if (room08BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture08 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnH, row02) //room 07
  rotate(north)
  if (room09TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture09].furnitureDraw()
  }
  rotate(east)
  if (room09BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture09 + 1].furnitureDraw()
  }
  rotate(south)
  if (room09TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture09 + 2].furnitureDraw()
  }
  rotate(west)
  if (room09BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture09 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnE, row02) //room 06
  rotate(north)
  if (room10TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture10].furnitureDraw()
  }
  rotate(east)
  if (room10BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture10 + 1].furnitureDraw()
  }
  rotate(south)
  if (room10TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture10 + 2].furnitureDraw()
  }
  rotate(west)
  if (room10BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture10 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnB, row08) //room 09
  rotate(north)
  if (room11TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture11].furnitureDraw()
  }
  rotate(east)
  if (room11BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture11 + 1].furnitureDraw()
  }
  rotate(south)
  if (room11TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture11 + 2].furnitureDraw()
  }
  rotate(west)
  if (room11BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture11 + 3].furnitureDraw()
  }
  pop()

  push()
  translate(columnB, row02) //room 05
  rotate(north)
  if (room12TLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture12].furnitureDraw()
  }
  rotate(east)
  if (room12BLFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture12 + 1].furnitureDraw()
  }
  rotate(south)
  if (room12TRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture12 + 2].furnitureDraw()
  }
  rotate(west)
  if (room12BRFurnitureSelect > furnitureYES) {
    furnitureList[indexFurniture12 + 3].furnitureDraw()
  }
  pop()

  //knife //blade //scissors
  blade(0 - unit * 3.5, 0 - unit * 4.4, unit * 0.025)
  push()
  rotate(90)
  blade(0 - unit * 2.0, 0 - unit * 5.9, unit * 0.025)
  // rotate(90)
  // blade(0 - unit * 3.5, 0 - unit * 4.4, unit * 0.03)
  // rotate(90)
  // blade(0 - unit * 2, 0 - unit * 5.9, unit * 0.03)
  pop()

  // //text
  // push()
  // textFont('monospace', unit * 0.13)
  // fill(0, 0, 100, 255)
  // noStroke()
  // text(textInstructions, 0, 0 - unit * 4.7, unit * 12, unit * 0.5)
  // pop()

  //pop() ///close up the zoom and pan
  pop() ///close up the zoom and pan

  //frame and interface
  fill(backgroundColor)
  fill(0, 0, 0, 255)
  noStroke()
  rect(
    width / 2,
    height - (unit / overallScale) * 0.5,
    width,
    unit / overallScale
  )
  rect(width / 2, (unit / overallScale) * 0.5, width, unit / overallScale)
  rect(
    (unit / overallScale) * 0.05,
    height / 2,
    (unit / overallScale) * 0.1,
    height
  )
  rect(
    width - (unit / overallScale) * 0.05,
    height / 2,
    (unit / overallScale) * 0.1,
    height
  )

  //text instructions
  push()
  textFont('monospace', (unit * 0.18) / overallScale)
  fill(0, 0, 100, 255)
  noStroke()
  text(
    "M o u s e   n a v i g a t e s .   '1'  r e t u r n   t o   f u l l   v i e w .",
    width / 2,
    (unit * 0.4) / overallScale
  )
  text(
    "'2'  t u r n   c i r c u i t   o n .   '3'  t u r n   c i r c u i t   o f f .",
    width / 2,
    (unit * 0.7) / overallScale
  )
  pop()

  //boxes and fill in
  for (let i = 0; i < 12; i++) {
    let xPosBoxes = i * (width / 12)
    fill(0, 0, 0, 100)
    strokeWeight(strokeWeightThin / overallScale)
    stroke(0, 0, 100, 255)
    // rect(
    //   width / 24 + xPosBoxes,
    //   height - (unit / overallScale) * 0.5,
    //   width / 12,
    //   unit / overallScale
    // )
  }

  ////MAPS ON FLOOR IN INTERFACE
  push()
  translate(0, height - (unit * 0.5) / overallScale)
  interfaceScale = (scaleMap * 4) / overallScale
  scale(interfaceScale)

  translate(width / 24 / interfaceScale, 0) //inset from end
  //ROOM01
  if (isSwitchOnRoom01) {
    push()
    translate(((width / 12) * 2) / interfaceScale, 0)
    //FIXED IN PAINTING
    mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)

    if (largeDoorB || centreDoorB) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorB) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorB) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (largeDoorA || centreDoorA) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorA) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorA) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    pop()
  }

  //ROOM02
  if (isSwitchOnRoom02) {
    push()
    translate(((width / 12) * 1) / interfaceScale, 0)
    //FIXED IN PAINTING
    mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)

    if (largeDoorD || centreDoorD) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorD) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorD) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (largeDoorC || centreDoorC) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorC) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorC) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    pop()
  }

  //ROOM03
  if (isSwitchOnRoom03) {
    push()
    translate(((width / 12) * 0) / interfaceScale, 0)
    //FIXED IN PAINTING
    mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)

    if (largeDoorE || centreDoorE) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorE) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorE) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (largeDoorH || centreDoorH) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorH) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorH) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    pop()
  }

  //ROOM04
  if (isSwitchOnRoom04) {
    push()
    translate(((width / 12) * 7) / interfaceScale, 0)
    if (largeDoorF || centreDoorF) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorF) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorF) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (largeDoorH || centreDoorH) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorH) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorH) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (largeDoorG || centreDoorG) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (leftDoorG) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (rightDoorG) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
      mapTrails(0, 0, unit * 0.3, unit * 0.3)
    }
    if (traitRoom08 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM05
  if (isSwitchOnRoom05) {
    push()
    translate(((width / 12) * 11) / interfaceScale, 0)
    if (largeDoorB || centreDoorB) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorB) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorB) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorK || centreDoorK) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorK) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorK) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom12 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM06
  if (isSwitchOnRoom06) {
    push()
    translate(((width / 12) * 10) / interfaceScale, 0)
    if (largeDoorD || centreDoorD) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorD) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorD) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorK || centreDoorK) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorK) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorK) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    if (largeDoorJ || centreDoorJ) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorJ) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorJ) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom11 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM07
  if (isSwitchOnRoom07) {
    push()
    translate(((width / 12) * 9) / interfaceScale, 0)
    //FIXED IN PAINTING
    mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)

    if (largeDoorJ || centreDoorJ) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorJ) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorJ) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    if (largeDoorI || centreDoorI) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorI) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorI) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom10 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM08
  if (isSwitchOnRoom08) {
    push()
    translate(((width / 12) * 8) / interfaceScale, 0)
    if (largeDoorG || centreDoorG) {
      mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorG) {
      mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorG) {
      mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorI || centreDoorI) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorI) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorI) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom09 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM09
  if (isSwitchOnRoom09) {
    push()
    translate(((width / 12) * 3) / interfaceScale, 0)
    if (largeDoorA || centreDoorA) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorA) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorA) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorL || centreDoorL) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorL) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorL) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()

    if (traitRoom04 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM10
  if (isSwitchOnRoom10) {
    push()
    translate(((width / 12) * 4) / interfaceScale, 0)
    if (largeDoorC || centreDoorC) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorC) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorC) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorM || centreDoorM) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorM) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorM) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    if (largeDoorL || centreDoorL) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorL) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorL) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom05 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM11
  if (isSwitchOnRoom11) {
    push()
    translate(((width / 12) * 5) / interfaceScale, 0)
    if (largeDoorE || centreDoorE) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorE) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorE) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorN || centreDoorN) {
      mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorN) {
      mapTrails(0 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorN) {
      mapTrails(0 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    if (largeDoorM || centreDoorM) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorM) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorM) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom06 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  //ROOM12
  if (isSwitchOnRoom12) {
    push()
    translate(((width / 12) * 6) / interfaceScale, 0)
    if (largeDoorF || centreDoorF) {
      mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    }
    if (leftDoorF) {
      mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (rightDoorF) {
      mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
      mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    }
    if (largeDoorN || centreDoorN) {
      mapTrails(0 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    }
    if (leftDoorN) {
      mapTrails(0 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 - panelGap / 2, doorCentreW, panelGap)
    }
    if (rightDoorN) {
      mapTrails(0 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
      mapTrails(0, 0 + panelGap / 2, doorCentreW, panelGap)
    }
    push()
    rotate(90)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
    pop()
    if (traitRoom07 == 'Hidden Interior') {
      fill(0, 0, 0, 255)
      stroke(0, 0, 100, 255)
      strokeWeight(strokeWeightThin * 2)
      rect(0, 0, unit * 0.4)
      line(0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2, unit * 0.2)
      line(0 + unit * 0.2, 0 - unit * 0.2, 0 - unit * 0.2, unit * 0.2)
    }
    pop()
  }

  pop()

  //text instructions at zoom in
  // if (scaleFactor === overallScale) {
  //   noStroke()
  //   fill(backgroundColor)
  //   rect(unit * 0.35, unit * 0.1, unit * 0.6, unit * 0.06)
  //   textSize(unit * 0.04)
  //   textFont('Times New Roman')
  //   stroke(colorBlueScreen)
  //   fill(0, 0, 100, 155)
  //   text('P R E S S  1  T O  Z O O M  O U T', unit * 0.35, unit * 0.1)
  // }

  //main frame elements outside of zoom and pan
  push()
  translate(width / 2, height / 2)
  // let screenPosX = width / 2 - (unit * 3) / overallScale
  // let screenPosY = height / 2 - (unit * 1.5) / overallScale
  //draw the screen

  noStroke()
  //fill(0, 0, 100, 255)
  fill(10, 60, 90, 255) //orange border
  rect(screenPosX, screenPosY, (unit * 1) / overallScale)
  fill(10, 0, 0, 255) //black gap
  rect(screenPosX, screenPosY, (unit * 0.95) / overallScale)
  fill(0, 0, 100, 255) //white edge
  rect(screenPosX, screenPosY, (unit * 0.88) / overallScale)
  fill(colorBluePainting) //blue screen
  rect(screenPosX, screenPosY, (unit * 0.87) / overallScale)

  //////////////////////////////////////////
  ////MAPS ON FLOOR NAVIGATION PANEL
  push()
  translate((-unit * 3.3) / overallScale, (-unit * 1.5) / overallScale)
  scale(scaleMap / overallScale)
  //ROOM01
  //FIXED IN PAINTING
  mapTrails(0 + unit * 0.25, 0, unit * 0.5, doorCentreW)
  mapTrails(0, 0, unit * 0.3, unit * 0.3)

  if (largeDoorB || centreDoorB) {
    mapTrails(0, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorB) {
    mapTrails(0 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorB) {
    mapTrails(0 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
  }
  if (largeDoorA || centreDoorA) {
    mapTrails(0, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorA) {
    mapTrails(0 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorA) {
    mapTrails(0 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(0, 0, unit * 0.3, unit * 0.3)
  }

  //ROOM02
  //FIXED IN PAINTING
  mapTrails(unit + unit * 0.25, 0, unit * 0.5, doorCentreW)
  mapTrails(unit - unit * 0.25, 0, unit * 0.5, doorCentreW)
  mapTrails(unit, 0, unit * 0.3, unit * 0.3)

  if (largeDoorD || centreDoorD) {
    mapTrails(unit, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorD) {
    mapTrails(unit + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorD) {
    mapTrails(unit - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit, 0, unit * 0.3, unit * 0.3)
  }
  if (largeDoorC || centreDoorC) {
    mapTrails(unit, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorC) {
    mapTrails(unit + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorC) {
    mapTrails(unit - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit, 0, unit * 0.3, unit * 0.3)
  }

  //ROOM03
  //FIXED IN PAINTING
  mapTrails(unit * 2, 0 - unit * 0.25, doorCentreW, unit * 0.5)
  mapTrails(unit * 2 - unit * 0.25, 0, unit * 0.5, doorCentreW)
  mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)

  if (largeDoorE || centreDoorE) {
    mapTrails(unit * 2, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorE) {
    mapTrails(unit * 2 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 2 + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorE) {
    mapTrails(unit * 2 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 2 - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)
  }
  if (largeDoorH || centreDoorH) {
    mapTrails(unit * 2 + unit * 0.25, 0, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorH) {
    mapTrails(unit * 2 + unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, 0 - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorH) {
    mapTrails(unit * 2 + unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, 0 + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, 0, unit * 0.3, unit * 0.3)
  }

  //ROOM04
  if (largeDoorF || centreDoorF) {
    mapTrails(unit * 3, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorF) {
    mapTrails(unit * 3 + panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorF) {
    mapTrails(unit * 3 - panelGap, 0 + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (largeDoorH || centreDoorH) {
    mapTrails(unit * 3 - unit * 0.25, 0, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorH) {
    mapTrails(unit * 3 - unit * 0.25, 0 - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, 0 - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorH) {
    mapTrails(unit * 3 - unit * 0.25, 0 + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, 0 + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (largeDoorG || centreDoorG) {
    mapTrails(unit * 3, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (leftDoorG) {
    mapTrails(unit * 3 + panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 + panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }
  if (rightDoorG) {
    mapTrails(unit * 3 - panelGap, 0 - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 - panelGap / 2, 0, panelGap, doorCentreW)
    mapTrails(unit * 3, 0, unit * 0.3, unit * 0.3)
  }

  //ROOM05
  if (largeDoorB || centreDoorB) {
    mapTrails(0, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorB) {
    mapTrails(0 + panelGap, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 + panelGap / 2, -unit, panelGap, doorCentreW)
    mapTrails(0, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorB) {
    mapTrails(0 - panelGap, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 - panelGap / 2, -unit, panelGap, doorCentreW)
    mapTrails(0, -unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorK || centreDoorK) {
    mapTrails(0 + unit * 0.25, -unit, unit * 0.5, doorCentreW)
    mapTrails(0, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorK) {
    mapTrails(0 + unit * 0.25, -unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(0, -unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(0, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorK) {
    mapTrails(0 + unit * 0.25, -unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(0, -unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(0, -unit, unit * 0.3, unit * 0.3)
  }

  //ROOM06
  if (largeDoorD || centreDoorD) {
    mapTrails(unit, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorD) {
    mapTrails(unit + panelGap, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit + panelGap / 2, -unit, panelGap, doorCentreW)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorD) {
    mapTrails(unit - panelGap, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit - panelGap / 2, -unit, panelGap, doorCentreW)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorK || centreDoorK) {
    mapTrails(unit - unit * 0.25, -unit, unit * 0.5, doorCentreW)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorK) {
    mapTrails(unit - unit * 0.25, -unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, -unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorK) {
    mapTrails(unit - unit * 0.25, -unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, -unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorJ || centreDoorJ) {
    mapTrails(unit + unit * 0.25, -unit, unit * 0.5, doorCentreW)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorJ) {
    mapTrails(unit + unit * 0.25, -unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, -unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorJ) {
    mapTrails(unit + unit * 0.25, -unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, -unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, -unit, unit * 0.3, unit * 0.3)
  }

  //ROOM07
  //FIXED IN PAINTING
  mapTrails(unit * 2, -unit + unit * 0.25, doorCentreW, unit * 0.5)
  mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)

  if (largeDoorJ || centreDoorJ) {
    mapTrails(unit * 2 - unit * 0.25, -unit, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorJ) {
    mapTrails(unit * 2 - unit * 0.25, -unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, -unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorJ) {
    mapTrails(unit * 2 - unit * 0.25, -unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, -unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorI || centreDoorI) {
    mapTrails(unit * 2 + unit * 0.25, -unit, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorI) {
    mapTrails(unit * 2 + unit * 0.25, -unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, -unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorI) {
    mapTrails(unit * 2 + unit * 0.25, -unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, -unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, -unit, unit * 0.3, unit * 0.3)
  }

  //ROOM08
  if (largeDoorG || centreDoorG) {
    mapTrails(unit * 3, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorG) {
    mapTrails(unit * 3 + panelGap, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 + panelGap / 2, -unit, panelGap, doorCentreW)
    mapTrails(unit * 3, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorG) {
    mapTrails(unit * 3 - panelGap, -unit + unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 - panelGap / 2, -unit, panelGap, doorCentreW)
    mapTrails(unit * 3, -unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorI || centreDoorI) {
    mapTrails(unit * 3 - unit * 0.25, -unit, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, -unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorI) {
    mapTrails(unit * 3 - unit * 0.25, -unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, -unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 3, -unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorI) {
    mapTrails(unit * 3 - unit * 0.25, -unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, -unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 3, -unit, unit * 0.3, unit * 0.3)
  }

  //ROOM09
  if (largeDoorA || centreDoorA) {
    mapTrails(0, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorA) {
    mapTrails(0 + panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 + panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(0, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorA) {
    mapTrails(0 - panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(0 - panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(0, unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorL || centreDoorL) {
    mapTrails(0 + unit * 0.25, unit, unit * 0.5, doorCentreW)
    mapTrails(0, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorL) {
    mapTrails(0 + unit * 0.25, unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(0, unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(0, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorL) {
    mapTrails(0 + unit * 0.25, unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(0, unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(0, unit, unit * 0.3, unit * 0.3)
  }

  //ROOM10
  if (largeDoorC || centreDoorC) {
    mapTrails(unit, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorC) {
    mapTrails(unit + panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit + panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorC) {
    mapTrails(unit - panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit - panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorM || centreDoorM) {
    mapTrails(unit + unit * 0.25, unit, unit * 0.5, doorCentreW)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorM) {
    mapTrails(unit + unit * 0.25, unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorM) {
    mapTrails(unit + unit * 0.25, unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorL || centreDoorL) {
    mapTrails(unit - unit * 0.25, unit, unit * 0.5, doorCentreW)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorL) {
    mapTrails(unit - unit * 0.25, unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorL) {
    mapTrails(unit - unit * 0.25, unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit, unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit, unit, unit * 0.3, unit * 0.3)
  }

  //ROOM11
  if (largeDoorE || centreDoorE) {
    mapTrails(unit * 2, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorE) {
    mapTrails(unit * 2 + panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 2 + panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorE) {
    mapTrails(unit * 2 - panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 2 - panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorN || centreDoorN) {
    mapTrails(unit * 2 + unit * 0.25, unit, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorN) {
    mapTrails(unit * 2 + unit * 0.25, unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorN) {
    mapTrails(unit * 2 + unit * 0.25, unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorM || centreDoorM) {
    mapTrails(unit * 2 - unit * 0.25, unit, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorM) {
    mapTrails(unit * 2 - unit * 0.25, unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorM) {
    mapTrails(unit * 2 - unit * 0.25, unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 2, unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 2, unit, unit * 0.3, unit * 0.3)
  }

  //ROOM12
  if (largeDoorF || centreDoorF) {
    mapTrails(unit * 3, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorF) {
    mapTrails(unit * 3 + panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 + panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(unit * 3, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorF) {
    mapTrails(unit * 3 - panelGap, unit - unit * 0.25, doorCentreW, unit * 0.5)
    mapTrails(unit * 3 - panelGap / 2, unit, panelGap, doorCentreW)
    mapTrails(unit * 3, unit, unit * 0.3, unit * 0.3)
  }
  if (largeDoorN || centreDoorN) {
    mapTrails(unit * 3 - unit * 0.25, unit, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, unit, unit * 0.3, unit * 0.3)
  }
  if (leftDoorN) {
    mapTrails(unit * 3 - unit * 0.25, unit - panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, unit - panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 3, unit, unit * 0.3, unit * 0.3)
  }
  if (rightDoorN) {
    mapTrails(unit * 3 - unit * 0.25, unit + panelGap, unit * 0.5, doorCentreW)
    mapTrails(unit * 3, unit + panelGap / 2, doorCentreW, panelGap)
    mapTrails(unit * 3, unit, unit * 0.3, unit * 0.3)
  }
  pop()

  ////////////////////////////////////////////

  if (overallScale == scaleFactor) {
    // fill(10, 60, 90, 155)
    // circle(
    //   screenPosX,
    //   screenPosY,
    //   random((unit * 0.1) / overallScale, (unit * 0.5) / overallScale)
    // )
  }

  // Check for collision
  if (
    checkCollision(
      //(((-unit * 1.25) / scaleFactor) * 10, 0)
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room03PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room03PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom03 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room02PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room02PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom02 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room01PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room01PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom01 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room04PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room04PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom04 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room05PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room05PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom05 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room06PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room06PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom06 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room07PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room07PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom07 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room08PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room08PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom08 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room09PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room09PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom09 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room10PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room10PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom10 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room11PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room11PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom11 = true
  }

  if (
    checkCollision(
      screenPosX + width / 2 - ((-unit * 1.25) / scaleFactor) * 10, // Adjust for translation
      screenPosY + height / 2, // Adjust for translation
      (unit * 0.8) / overallScale,
      (unit * 0.8) / overallScale,
      room12PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
      room12PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
      unit / overallScale,
      unit / overallScale
    )
  ) {
    isSwitchOnRoom12 = true
  }

  pop()

  // if (landscapeFormat) {
  //   push()
  //   translate(width / 2, height / 2)
  //   // let screenPosX = width / 2 - (unit * 3) / overallScale
  //   // let screenPosY = height / 2 - (unit * 1.5) / overallScale
  //   //draw the screen
  //   noStroke()
  //   fill(0, 0, 100, 255)
  //   rect(screenPosX, screenPosY, (unit * 0.95) / overallScale)
  //   fill(colorBluePainting)
  //   rect(screenPosX, screenPosY, (unit * 0.9) / overallScale) ///blue screen

  //   // Check for collision
  //   if (
  //     checkCollision(
  //       screenPosX + width / 2, // Adjust for translation
  //       screenPosY + height / 2, // Adjust for translation
  //       (unit * 0.8) / overallScale,
  //       (unit * 0.8) / overallScale,
  //       room03PaintingX + width / 2 + xPanPosition, // Adjust for translation and scaling
  //       room03PaintingY + height / 2 + yPanPosition, // Adjust for translation and scaling
  //       unit / overallScale,
  //       unit / overallScale
  //     )
  //   ) {
  //     isSwitchOnRoom03 = true
  //   }
  //   // If there is a collision, draw a purple rectangle
  //   // if (isSwitchOnRoom03) {
  //   //   fill(280, 100, 100, 155)
  //   //   rect(columnF, row05, unit / overallScale)
  //   //   isSwitchOnRoom03 = true
  //   // }

  //   pop()

  // }
  // if (portraitFormat) {
  //   fill(colorBluePainting)
  //   noStroke()
  //   screenPosX = width / 2 - unit / 6.66
  //   screenPosY = height / 2
  //   rect(screenPosX, screenPosY, unit / 10, unit / 10)
  //   //fill(0,100,100,255)
  //   //circle(room03PaintingX,room03PaintingY,height)
  // }

  //interface
  //rect(0 + unit * 1.6, 0 + unit * 0.85, unit * 3, unit * 1.5)

  //border

  // Update previousMouseX and previousMouseY
  previousMouseX = mouseX
  previousMouseY = mouseY

  //////export PNG
  // if (isDownloading) {
  //   exportHighResPNG() // Export high-res PNG when '2' is pressed
  //   isDownloading = false // Reset the download flag
  // }
}

function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
  let left1 = x1 - w1 / 8
  let right1 = x1 + w1 / 8
  let top1 = y1 - h1 / 8
  let bottom1 = y1 + h1 / 8

  let left2 = x2 - w2 / 8
  let right2 = x2 + w2 / 8
  let top2 = y2 - h2 / 8
  let bottom2 = y2 + h2 / 8

  // Check for collision
  return (
    left1 <= right2 && right1 >= left2 && top1 <= bottom2 && bottom1 >= top2
  )
}

function baseRoom(x, y, size) {
  noStroke()
  fill(0, 0, 100, 255)
  rect(x, y, size * 1.2)
  rect(x - size, y, size * 1.35)
  rect(x + size, y, size * 1.35)
  rect(x, y - size, size * 1.35)
  rect(x, y + size, size * 1.35)
  fill(0, 0, 0, 255)
  rect(x, y, size * 1.2)
  rect(x - size, y, size * 1.32)
  rect(x + size, y, size * 1.32)
  rect(x, y - size, size * 1.32)
  rect(x, y + size, size * 1.32)
}

function foldedEdgesCollated(x, y, size) {
  stroke(0, 0, 100, 255)
  strokeWeight(strokeWeightThin)
  fill(0, 0, 100, 100)
  //folded edges
  foldEdgeSmall(x - size * 0.55, y - size, size * 0.1, size * 0.3)
  foldEdgeSmall(x - size * 0.55, y + size, size * 0.1, size * 0.3)
  foldEdgeSmall(x + size * 0.55, y - size, size * 0.1, size * 0.3)
  foldEdgeSmall(x + size * 0.55, y + size, size * 0.1, size * 0.3)
  foldEdgeBigLower(x + size, y + size * 0.55, size, size * 0.1)
  foldEdgeBigLower(x - size, y + size * 0.55, size, size * 0.1)
  foldEdgeBigUpper(x + size, y - size * 0.55, size, size * 0.1)
  foldEdgeBigUpper(x - size, y - size * 0.55, size, size * 0.1)
  //rect black
  fill(backgroundColor)
  fill(0, 0, 0, 255)
  rect(x - size, y - size * 0.55, size * 0.3, size * 0.03)
  rect(x - size, y + size * 0.55, size * 0.3, size * 0.03)
  rect(x + size, y - size * 0.55, size * 0.3, size * 0.03)
  rect(x + size, y + size * 0.55, size * 0.3, size * 0.03)
}

function backEdgePanel(x, y, size, scaleUp) {
  noStroke()
  //fill(0, 100, 100, 255)
  //folded edges
  foldEdgeSmall(
    x - size * 0.55,
    y - size,
    size * 0.1 + scaleUp,
    size * 0.3 + scaleUp
  )
  foldEdgeSmall(
    x - size * 0.55,
    y + size,
    size * 0.1 + scaleUp,
    size * 0.3 + scaleUp
  )
  foldEdgeSmall(
    x + size * 0.55,
    y - size,
    size * 0.1 + scaleUp,
    size * 0.3 + scaleUp
  )
  foldEdgeSmall(
    x + size * 0.55,
    y + size,
    size * 0.1 + scaleUp,
    size * 0.3 + scaleUp
  )
  foldEdgeBigLower(
    x + size,
    y + size * 0.55,
    size + scaleUp * 2.5,
    size * 0.1 + scaleUp
  )
  foldEdgeBigLower(
    x - size,
    y + size * 0.55,
    size + scaleUp * 2.5,
    size * 0.1 + scaleUp
  )
  foldEdgeBigUpper(
    x + size,
    y - size * 0.55,
    size + scaleUp * 2.5,
    size * 0.1 + scaleUp
  )
  foldEdgeBigUpper(
    x - size,
    y - size * 0.55,
    size + scaleUp * 2.5,
    size * 0.1 + scaleUp
  )
  //rects
  rect(x, y, size + scaleUp * 0.5)
  rect(x - size, y, size + scaleUp, size - scaleUp)
  rect(x + size, y, size + scaleUp, size - scaleUp)
  rect(x, y - size, size + scaleUp, size + scaleUp)
  rect(x, y + size, size + scaleUp, size + scaleUp)
}

function baseWallTemplate(size) {
  noFill()
  stroke(0, 0, 100, 255)
  strokeWeight(10)
  //rect(0, 0, size)
}

function floorBoards01(x, y, depth, length, colorH, colorS, colorB) {
  push()
  translate(x, y)
  noStroke()
  fill(colorH, colorS, colorB, 255)
  rect(0, 0, depth * 0.95, length * 0.95)
  fill(colorH - 5, colorS - 5, colorB + 5, 155)
  rect(0 - depth * 0.05, 0, depth * 0.8, length * 1.05)
  fill(colorH, colorS, 100, 55)
  rect(0, 0, depth * 0.9, length * 0.9)
  fill(0, 0, 100, 15)
  rect(0, 0 - length * 0.1, depth * 0.5, length * 0.8)

  //floorboard lines
  // stroke(20, 0, 100, 55)
  // for (let i = 0; i < length; i += length / 15) {
  //   line(0 - depth * 0.5, i - length * 0.5, depth * 0.5, i - length * 0.5)
  // }

  pop()
}

function panelSingle(x, y, w, h) {
  rect(x, y, w, h)
  //overlays
  fill(0, 0, 100, 50)
  rect(x - w * 0.05, y, w * 0.8, h * 1.1)
  fill(200, 40, 100, 50)
  rect(x, y, w * 0.8, h * 0.8)
  //extra white highlight
  fill(0, 0, 100, 30)
  noStroke()
  rect(x + h * 0.1, y + w * 0.1, h * 0.2, w * 0.2)
  //white line border
  noFill()
  stroke(0, 0, 100, 255)
  strokeWeight(strokeWeightThin)
  rect(x, y, w, h)
  noStroke()
  //white flicker test
  // fill(0, 0, 100, random(0,60))
  // rect(x, y, w * 0.8, h * 0.8)
  // fill(0, 0, 100, random(0,100))
  // rect(random(x-w/2, x+w/2), random(y-h/2, y+h/2), w * 0.4, h * 0.4)
  //hooks
  fill(0, 0, 0, 255) //black
  rect(x - w / 2 + w * 0.08, y, w * 0.2, h * 0.2)
  rect(x + w / 2 - w * 0.08, y, w * 0.2, h * 0.2)
  fill(20, 40, 100, 255) //highlight
  rect(x - w / 2 + w * 0.08, y, w * 0.15, h * 0.1)
  rect(x + w / 2 - w * 0.08, y, w * 0.15, h * 0.1)
  // //glint noise
  // let noiseValX = noiseX + noise(noiseOffsetX) * noiseStrength
  // let noiseValY = noiseY + noise(noiseOffsetY) * noiseStrength
  // // let alpha = map(noiseValX + noiseValY, -1, 1, 0, 255)
  // fill(0, 0, 100, 50)
  // rect(noiseValX, noiseValY, 150, 50) // Adjust rectangle position as needed
  // rect(noiseValX, noiseValY, 40, 60)
  // fill(0, 0, 100, 200)
  // rect(noiseValX - 10, noiseValY - 10, 20, 20)
  // noiseOffsetX += noiseScale
  // noiseOffsetY += noiseScale
}

function foldEdgeBigLower(x, y, xSize, ySize) {
  beginShape()
  vertex(x - xSize * 0.5, y - ySize * 0.5)
  vertex(x + xSize * 0.5, y - ySize * 0.5)
  vertex(x + xSize * 0.5 - ySize, y + ySize * 0.5)
  vertex(x - xSize * 0.5 + ySize, y + ySize * 0.5)
  endShape(CLOSE)
}
function foldEdgeBigUpper(x, y, xSize, ySize) {
  push()
  //translate(0,0-unit-ySize)
  beginShape()
  vertex(x - xSize * 0.5, y + ySize * 0.5)
  vertex(x + xSize * 0.5, y + ySize * 0.5)
  vertex(x + xSize * 0.5 - ySize, y - ySize * 0.5)
  vertex(x - xSize * 0.5 + ySize, y - ySize * 0.5)
  endShape(CLOSE)
  pop()
  // beginShape()
  // vertex(x - xSize * 0.5, y - unit - ySize * 0.5)
  // vertex(x + xSize * 0.5, y - unit - ySize * 0.5)
  // vertex(x + xSize * 0.5 - ySize, y - unit - ySize * 1.5)
  // vertex(x - xSize * 0.5 + ySize, y - unit - ySize * 1.5)
  // endShape(CLOSE)
}

function foldEdgeSmall(x, y, depth, length) {
  // stroke(0, 0, 100, 255)
  // strokeWeight(strokeWeightThin)
  // fill(0, 0, 100, 100)
  rect(x, y, depth, length)
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    // translate(-unit*1.5, 0)

    if (isFirstZoom) {
      //these added in here so that everyone who zooms is switching on
      //regardless of start trait
      isSwitchOnRoom01 = false
      isSwitchOnRoom02 = false
      isSwitchOnRoom03 = false
      isSwitchOnRoom04 = false
      isSwitchOnRoom05 = false
      isSwitchOnRoom06 = false
      isSwitchOnRoom07 = false
      isSwitchOnRoom08 = false
      isSwitchOnRoom09 = false
      isSwitchOnRoom10 = false
      isSwitchOnRoom11 = false
      isSwitchOnRoom12 = false
      scaleFactor *= overallScale

      isFirstZoom = false
      zoomCenterX = mouseX // Store the zoom center X coordinate
      zoomCenterY = mouseY // Store the zoom center Y coordinate
    }
  }
  isMousePressed = true
}

function touchStarted() {
  // Prevent default behavior to disable scrolling on touch
  // This line is important to prevent the browser from interpreting touch gestures as scrolling
  return false
}

function touchEnded() {
  // Add your logic here for what should happen when touch ends
}

// function touchStarted() { ///turned this off on 28th April
//   if (touchX > 0 && touchX < width && touchY > 0 && touchY < height) {
//     if (isFirstZoom) {
//       scaleFactor *= overallScale

//       isFirstZoom = false
//       zoomCenterX = touchX // Store the zoom center X coordinate
//       zoomCenterY = touchY // Store the zoom center Y coordinate
//     }
//   }
//   isTouchStarted = true
// }

function mouseReleased() {
  isMousePressed = false
}

// function touchReleased() {
//   isTouchStarted = false
// }

function keyTyped() {
  if (key === '1') {
    scaleFactor = 1 // Reset the scale factor to 1 for original view
    isFirstZoom = true // Reset isFirstZoom flag
    xPanPosition = 0 // Reset the pan position on the x-axis
    yPanPosition = 0 // Reset the pan position on the y-axis
  }
}

function keyPressed() {
  if (key === '2') {
    isSwitchOnRoom01 = true
    isSwitchOnRoom02 = true
    isSwitchOnRoom03 = true
    isSwitchOnRoom04 = true
    isSwitchOnRoom05 = true
    isSwitchOnRoom06 = true
    isSwitchOnRoom07 = true
    isSwitchOnRoom08 = true
    isSwitchOnRoom09 = true
    isSwitchOnRoom10 = true
    isSwitchOnRoom11 = true
    isSwitchOnRoom12 = true
  } else if (key === '3') {
    isSwitchOnRoom01 = false
    isSwitchOnRoom02 = false
    isSwitchOnRoom03 = false
    isSwitchOnRoom04 = false
    isSwitchOnRoom05 = false
    isSwitchOnRoom06 = false
    isSwitchOnRoom07 = false
    isSwitchOnRoom08 = false
    isSwitchOnRoom09 = false
    isSwitchOnRoom10 = false
    isSwitchOnRoom11 = false
    isSwitchOnRoom12 = false
  } else if (key === '4') {
    saveCanvas('interiors', 'png')
  }
}

// function keyPressed() {
//   if (key === '4') {
//     saveCanvas('interiors', 'png')
//   }
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function exportHighResPNG() {
  // Temporarily scale up the canvas for high-resolution capture
  // let tempScale = 1
  // scale(tempScale)

  // // Capture the canvas content
  // let highResCanvas = get()
  // highResCanvas.resize(width * tempScale, height * tempScale)

  // // Reset the canvas scale
  // scale(1 / tempScale)2

  // Save the captured canvas as a high-resolution PNG
  //highResCanvas.save('high_res', 'png')
  saveCanvas('high_res', 'png')
}

class panelA {
  //large opening
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelADraw() {
    push()
    noStroke()
    translate(0, 0)
    //centre opening
    //centre panel - base color with H variation
    fill(this.colorH + hueShiftBaseA, this.colorS, this.colorB, 255)
    panelSingle(0, 0 + panelGap * 0.2, panelThird * 2.1, panelTwoThirds * 1.4)
    //door
    fill(0, 0, 100, 255)
    rect(0, 0 + panelThird * 0.26, panelThird * 1.9, panelTwoThirds * 1.35)
    fill(backgroundColor)
    rect(doorLargeX, doorLargeY, doorLargeW, doorLargeH)

    //left panel - base color
    fill(this.colorH + 5 + hueShiftBaseA, this.colorS, this.colorB, 255)
    panelSingle(
      0 - panelGap * 1.23,
      0 - panelGap * 0.3,
      panelThird * 0.5,
      panelTwoThirds * 0.85
    )
    fill(this.colorH - 5 + hueShiftBaseA, this.colorS, this.colorB + 10, 255)
    panelSingle(
      0 - panelGap * 1.23,
      0 + panelGap * 1,
      panelThird * 0.5,
      panelThird
    )

    // //right panel - base color more purple and darker
    fill(
      this.colorH + 10 + hueShiftBaseA,
      this.colorS + 10,
      this.colorB - 10,
      255
    )
    panelSingle(
      0 + panelGap * 1.23,
      0 - panelGap * 0.3,
      panelThird * 0.5,
      panelTwoThirds * 0.85
    )
    fill(this.colorH + 15 + hueShiftBaseA, this.colorS, this.colorB - 10, 255)
    panelSingle(
      0 + panelGap * 1.23,
      0 + panelGap * 1,
      panelThird * 0.5,
      panelThird
    )

    //architrave
    fill(this.colorH + hueShiftBaseA, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseA = hueShiftBaseA + this.hueShift
    if (hueShiftBaseA > hueShifterTop || hueShiftBaseA < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    pop()
  }
}

class panelB {
  //single wall panel
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelBDraw() {
    push()
    noStroke()
    translate(0, 0)
    //centre panel - base color with H variation
    fill(this.colorH + hueShiftBaseB, this.colorS, this.colorB, 255)
    panelSingle(0, 0 - panelGap * 0.3, unit * 0.96, panelTwoThirds * 0.85)
    fill(this.colorH - 10, this.colorS, this.colorB, 255)
    panelSingle(0, 0 + panelGap * 1, panelThird, panelThird)

    //left panel - base color but slightly brighter
    fill(this.colorH + 5 - hueShiftBaseB, this.colorS, this.colorB + 10, 255)
    panelSingle(0 - panelGap, 0 + panelGap * 1, panelThird, panelThird)

    // //right panel - base color more purple and darker
    fill(
      this.colorH + 10 + hueShiftBaseB,
      this.colorS + 10,
      this.colorB - 10,
      255
    )
    panelSingle(0 + panelGap, 0 + panelGap * 1, panelThird, panelThird)

    //architrave
    fill(this.colorH + hueShiftBaseB, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseB = hueShiftBaseB + this.hueShift
    if (hueShiftBaseB > hueShifterTop || hueShiftBaseB < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    pop()
  }
}

class panelC {
  //three walll panels
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelCDraw() {
    push()
    noStroke()
    translate(0, 0)
    //centre panel - base color with H variation
    fill(this.colorH - hueShiftBaseC, this.colorS, this.colorB, 255)
    panelSingle(0, 0 - panelGap * 0.3, panelThird, panelTwoThirds * 0.85)
    fill(this.colorH - 10, this.colorS, this.colorB, 255)
    panelSingle(0, 0 + panelGap * 1, panelThird, panelThird)

    //left panel - base color but slightly brighter
    fill(this.colorH + 5 - hueShiftBaseC, this.colorS, this.colorB + 10, 255)
    panelSingle(
      0 - panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH - 5 - hueShiftBaseC, this.colorS, this.colorB + 10, 255)
    panelSingle(0 - panelGap, 0 + panelGap * 1, panelThird, panelThird)

    // //right panel - base color more purple and darker
    fill(
      this.colorH + 10 - hueShiftBaseC,
      this.colorS + 10,
      this.colorB - 10,
      255
    )
    panelSingle(
      0 + panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH + 15 - hueShiftBaseC, this.colorS, this.colorB - 10, 255)
    panelSingle(0 + panelGap, 0 + panelGap * 1, panelThird, panelThird)

    //architrave
    fill(this.colorH - hueShiftBaseC, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseC = hueShiftBaseC + this.hueShift
    if (hueShiftBaseC > hueShifterTop || hueShiftBaseC < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    pop()
  }
}

class panelD {
  //centre door
  //three walll panels
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelDDraw() {
    push()
    noStroke()
    translate(0, 0)
    //centre panel - base color with H variation
    fill(this.colorH + hueShiftBaseD, this.colorS, this.colorB, 255)
    panelSingle(0, 0 + panelGap * 0.45, panelThird, panelTwoThirds * 1.1)
    fill(this.colorH - 10 + hueShiftBaseD, this.colorS, this.colorB, 255)
    panelSingle(0, 0 - panelGap * 0.84, panelThird, panelThird * 0.5)
    //door
    fill(0, 0, 100, 255)
    rect(0, 0 + panelThird * 0.55, panelThird * 0.75, panelTwoThirds * 1.05)
    fill(backgroundColor)
    rect(doorCentreX, doorCentreY, doorCentreW, doorCentreH)

    //left panel - base color but slightly brighter
    fill(this.colorH + 5 + hueShiftBaseD, this.colorS, this.colorB + 10, 255)
    panelSingle(
      0 - panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH - 5 + hueShiftBaseD, this.colorS, this.colorB + 10, 255)
    panelSingle(0 - panelGap, 0 + panelGap * 1, panelThird, panelThird)

    // //right panel - base color more purple and darker
    fill(this.colorH + 10, this.colorS + 10, this.colorB - 10, 255)
    panelSingle(
      0 + panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH + 15 + hueShiftBaseD, this.colorS, this.colorB - 10, 255)
    panelSingle(0 + panelGap, 0 + panelGap * 1, panelThird, panelThird)

    //architrave
    fill(this.colorH + hueShiftBaseD, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseD = hueShiftBaseD + this.hueShift
    if (hueShiftBaseD > hueShifterTop || hueShiftBaseD < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    pop()
  }
}

class panelE {
  //left door
  //three walll panels
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelEDraw() {
    push()
    noStroke()
    translate(0, 0)
    //left panel - base color with H variation
    fill(this.colorH - hueShiftBaseE, this.colorS, this.colorB, 255)
    panelSingle(
      0 - panelGap,
      0 + panelGap * 0.45,
      panelThird,
      panelTwoThirds * 1.1
    )
    fill(this.colorH - 10 - hueShiftBaseE, this.colorS, this.colorB, 255)
    panelSingle(0 - panelGap, 0 - panelGap * 0.84, panelThird, panelThird * 0.5)
    //door
    fill(0, 0, 100, 255)
    rect(
      0 - panelGap,
      0 + panelThird * 0.55,
      panelThird * 0.75,
      panelTwoThirds * 1.05
    )
    fill(backgroundColor)
    rect(doorLeftX, doorLeftY, doorLeftW, doorLeftH)

    //centre panel - base color but slightly brighter
    fill(this.colorH + 5 - hueShiftBaseE, this.colorS, this.colorB + 10, 255)
    panelSingle(0, 0 - panelGap * 0.3, panelThird, panelTwoThirds * 0.85)
    fill(this.colorH - 5, this.colorS, this.colorB + 10, 255)
    panelSingle(0, 0 + panelGap * 1, panelThird, panelThird)

    // //right panel - base color more purple and darker
    fill(
      this.colorH + 10 - hueShiftBaseE,
      this.colorS + 10,
      this.colorB - 10,
      255
    )
    panelSingle(
      0 + panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH + 15 - hueShiftBaseE, this.colorS, this.colorB - 10, 255)
    panelSingle(0 + panelGap, 0 + panelGap * 1, panelThird, panelThird)

    //architrave
    fill(this.colorH - hueShiftBaseE, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseE = hueShiftBaseE + this.hueShift
    if (hueShiftBaseE > hueShifterTop || hueShiftBaseE < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    pop()
  }
}

class panelF {
  //right door
  //three walll panels
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelFDraw() {
    push()
    noStroke()
    translate(0, 0)
    //right panel - base color with H variation
    fill(this.colorH + hueShiftBaseF, this.colorS, this.colorB, 255)
    panelSingle(
      0 + panelGap,
      0 + panelGap * 0.45,
      panelThird,
      panelTwoThirds * 1.1
    )
    fill(this.colorH - 10 + hueShiftBaseF, this.colorS, this.colorB, 255)
    panelSingle(0 + panelGap, 0 - panelGap * 0.84, panelThird, panelThird * 0.5)
    //door
    fill(0, 0, 100, 255)
    rect(
      0 + panelGap,
      0 + panelThird * 0.55,
      panelThird * 0.75,
      panelTwoThirds * 1.05
    )
    fill(backgroundColor)
    rect(doorRightX, doorRightY, doorRightW, doorRightH)

    //centre panel - base color but slightly brighter
    fill(this.colorH + 5 + hueShiftBaseF, this.colorS, this.colorB + 10, 255)
    panelSingle(0, 0 - panelGap * 0.3, panelThird, panelTwoThirds * 0.85)
    fill(this.colorH - 5, this.colorS, this.colorB + 10, 255)
    panelSingle(0, 0 + panelGap * 1, panelThird, panelThird)

    // //left panel - base color more purple and darker
    fill(
      this.colorH + 10 + hueShiftBaseF,
      this.colorS + 10,
      this.colorB - 10,
      255
    )
    panelSingle(
      0 - panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH + 15 + hueShiftBaseF, this.colorS, this.colorB - 10, 255)
    panelSingle(0 - panelGap, 0 + panelGap * 1, panelThird, panelThird)

    //architrave
    fill(this.colorH + hueShiftBaseF, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseF = hueShiftBaseF + this.hueShift
    if (hueShiftBaseF > hueShifterTop || hueShiftBaseF < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    pop()
  }
}

class panelG {
  //centre window
  constructor(colorH, colorS, colorB, hueShift) {
    this.colorH = colorH
    this.colorS = colorS
    this.colorB = colorB
    this.hueShift = hueShift
  }
  panelGDraw() {
    push()
    noStroke()
    translate(0, 0)
    //centre panel - base color with H variation
    fill(this.colorH - 10, this.colorS, this.colorB, 255)
    panelSingle(0, 0 + panelGap * 1.2, panelThird, panelThird * 0.6)
    fill(this.colorH - hueShiftBaseC, this.colorS, this.colorB, 255)
    panelSingle(0, 0 - panelGap * 0.1, panelThird, panelTwoThirds * 1.05)
    //window
    fill(backgroundColor)
    rect(0, 0 - panelGap * 0.1, panelThird * 0.9, panelTwoThirds * 1)
    fill(this.colorH, this.colorS, this.colorB, 255)
    rect(0, 0 - panelGap * 0.1, panelThird * 0.1, panelTwoThirds * 1)
    rect(0, 0 - panelGap * 0.1, panelThird * 0.9, panelThird * 0.1)
    stroke(0, 0, 100, 255)
    strokeWeight(strokeWeightThin)
    line(
      0 - panelThird * 0.4,
      0 - panelGap * 0.1,
      0 + panelThird * 0.4,
      0 - panelGap * 0.1
    )
    line(
      0 - panelThird * 0.5,
      0 - panelGap * 0.425,
      0 + panelThird * 0.5,
      0 - panelGap * 0.425
    )
    line(
      0 - panelThird * 0.5,
      0 - panelGap * 0.75,
      0 + panelThird * 0.5,
      0 - panelGap * 0.75
    )
    line(
      0 - panelThird * 0.5,
      0 + panelGap * 0.225,
      0 + panelThird * 0.5,
      0 + panelGap * 0.225
    )
    line(
      0 - panelThird * 0.5,
      0 + panelGap * 0.55,
      0 + panelThird * 0.5,
      0 + panelGap * 0.55
    )
    line(0, 0 + panelTwoThirds * 0.47, 0, 0 - panelTwoThirds * 0.58)
    line(
      0 - panelThird * 0.25,
      0 + panelTwoThirds * 0.47,
      0 - panelThird * 0.25,
      0 - panelTwoThirds * 0.58
    )
    line(
      0 + panelThird * 0.25,
      0 + panelTwoThirds * 0.47,
      0 + panelThird * 0.25,
      0 - panelTwoThirds * 0.58
    )

    noStroke()

    //left panel - base color but slightly brighter
    fill(this.colorH + 5 - hueShiftBaseC, this.colorS, this.colorB + 10, 255)
    panelSingle(
      0 - panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH - 5 - hueShiftBaseC, this.colorS, this.colorB + 10, 255)
    panelSingle(0 - panelGap, 0 + panelGap * 1, panelThird, panelThird)

    // //right panel - base color more purple and darker
    fill(
      this.colorH + 10 - hueShiftBaseC,
      this.colorS + 10,
      this.colorB - 10,
      255
    )
    panelSingle(
      0 + panelGap,
      0 - panelGap * 0.3,
      panelThird,
      panelTwoThirds * 0.85
    )
    fill(this.colorH + 15 - hueShiftBaseC, this.colorS, this.colorB - 10, 255)
    panelSingle(0 + panelGap, 0 + panelGap * 1, panelThird, panelThird)

    //architrave
    fill(this.colorH - hueShiftBaseC, this.colorS, this.colorB, 200)
    panelSingle(0, 0 - panelGap * 1.3, unit * 0.96, panelTopEdge)

    hueShiftBaseC = hueShiftBaseC + this.hueShift
    if (hueShiftBaseC > hueShifterTop || hueShiftBaseC < hueShifterBottom) {
      this.hueShift = this.hueShift * -1
    }

    //glow on floor
    fill(0, 0, 100, 35)
    rect(0, 0 + unit * 0.5 + panelThird * 0.6, panelThird * 2, panelThird * 1.2)
    rect(
      0,
      0 + unit * 0.5 + panelThird * 0.8,
      panelThird * 1.5,
      panelThird * 1.6
    )
    rect(0, 0 + unit * 0.5 + panelThird * 0.9, panelThird * 1, panelThird * 1.8)
    rect(0, 0 + unit * 0.5 + panelThird * 0.8, panelThird * 0.8, panelThird * 1)

    pop()
  }
}

class furnitureElement {
  constructor(
    furniture01x,
    furniture01y,
    furniture01w,
    furniture01d,
    furniture01h,
    furniture01Offset,
    furniture02x,
    furniture02y,
    furniture02w,
    furniture02d,
    furniture02h,
    furniture02Offset,
    furniture03x,
    furniture03y,
    furniture03w,
    furniture03d,
    furniture03h,
    furniture03Offset
  ) {
    this.furniture01x = furniture01x
    this.furniture01y = furniture01y
    this.furniture01w = furniture01w
    this.furniture01d = furniture01d
    this.furniture01h = furniture01h
    this.furniture01Offset = furniture01Offset
    this.furniture02x = furniture02x
    this.furniture02y = furniture02y
    this.furniture02w = furniture02w
    this.furniture02d = furniture02d
    this.furniture02h = furniture02h
    this.furniture02Offset = furniture02Offset
    this.furniture03x = furniture03x
    this.furniture03y = furniture03y
    this.furniture03w = furniture03w
    this.furniture03d = furniture03d
    this.furniture03h = furniture03h
    this.furniture03Offset = furniture03Offset
  }
  furnitureDraw() {
    push()
    translate(-unit * 0.25, -unit * 0.25)
    noStroke()
    //plan view
    fill(0, 0, 0, 55) //black shadow
    rect(
      this.furniture01x + unit * 0.05,
      this.furniture01y + unit * 0.05,
      this.furniture01w * 1.5,
      this.furniture01d * 1.5
    )
    //shadows turned off
    // rect(
    //   this.furniture02x + unit * 0.05,
    //   this.furniture02y + unit * 0.05,
    //   this.furniture02w * 1.5,
    //   this.furniture02d * 1.5
    // )
    // rect(
    //   this.furniture03x + unit * 0.05,
    //   this.furniture03y + unit * 0.05,
    //   this.furniture03w * 1.5,
    //   this.furniture03d * 1.5
    // )
    fill(0, 0, 10, 255) //black border
    rect(
      this.furniture01x,
      this.furniture01y,
      this.furniture01w * 1.3,
      this.furniture01d * 1.3
    )
    rect(
      this.furniture02x,
      this.furniture02y,
      this.furniture02w * 1.3,
      this.furniture02d * 1.3
    )
    rect(
      this.furniture03x,
      this.furniture03y,
      this.furniture03w * 1.3,
      this.furniture03d * 1.3
    )
    fill(20, 70, 20, 255) //color main
    rect(
      this.furniture01x,
      this.furniture01y,
      this.furniture01w,
      this.furniture01d
    )
    rect(
      this.furniture02x,
      this.furniture02y,
      this.furniture02w,
      this.furniture02d
    )
    fill(200, 0, 100, 255) //color 03
    rect(
      this.furniture03x,
      this.furniture03y,
      this.furniture03w,
      this.furniture03d
    )
    //xOffset view
    fill(220, 10, 100, 55) //black border
    rect(
      this.furniture01x - this.furniture01Offset,
      this.furniture01y,
      this.furniture01h * 1.3,
      this.furniture01d * 1.3
    )
    rect(
      this.furniture02x - this.furniture02Offset,
      this.furniture02y,
      this.furniture02h * 1.3,
      this.furniture02d * 1.3
    )
    rect(
      this.furniture03x - this.furniture03Offset,
      this.furniture03y,
      this.furniture03h * 1.3,
      this.furniture03d * 1.3
    )
    fill(220, 10, 100, 55) //color
    rect(
      this.furniture01x - this.furniture01Offset,
      this.furniture01y,
      this.furniture01h,
      this.furniture01d
    )
    rect(
      this.furniture02x - this.furniture02Offset,
      this.furniture02y,
      this.furniture02h,
      this.furniture02d
    )
    fill(220, 10, 100, 55) //color 03 white
    rect(
      this.furniture03x - this.furniture03Offset,
      this.furniture03y,
      this.furniture03h,
      this.furniture03d
    )
    //yOffset view
    fill(220, 10, 100, 55) //black border
    rect(
      this.furniture01x,
      this.furniture01y - this.furniture01Offset,
      this.furniture01w * 1.3,
      this.furniture01h * 1.3
    )
    rect(
      this.furniture02x,
      this.furniture02y - this.furniture02Offset,
      this.furniture02w * 1.3,
      this.furniture02h * 1.3
    )

    rect(
      this.furniture03x,
      this.furniture03y - this.furniture03Offset,
      this.furniture03w * 1.3,
      this.furniture03h * 1.3
    )
    fill(220, 10, 100, 55) //color
    rect(
      this.furniture01x,
      this.furniture01y - this.furniture01Offset,
      this.furniture01w,
      this.furniture01h
    )
    rect(
      this.furniture02x,
      this.furniture02y - this.furniture02Offset,
      this.furniture02w,
      this.furniture02h
    )
    fill(220, 10, 100, 55) //color 03
    rect(
      this.furniture03x,
      this.furniture03y - this.furniture03Offset,
      this.furniture03w,
      this.furniture03h
    )
    pop()
  }
}

function paintingElement(x, y, size) {
  noStroke()
  fill(10, 60, 90, 255)
  rect(x, y, size)
  fill(10, 0, 0, 255)
  rect(x, y, size * 0.95)
  fill(0, 0, 100, 255)
  rect(x, y, size * 0.88)
  fill(colorBluePainting)
  rect(x, y, size * 0.87)
  // fill(10, 60, 90, 100)
  // circle(x, y, random(size * 0.1, size * 0.5))
}

function mapTrails(x, y, w, h) {
  if (w >= h) {
    // fill(0, 100, 0, 255)
    // rect(x, y, w, h * 1.4)
    fill(colorBlueScreen)
    rect(x, y, w, h)
    fill(240, 50, 100, 255)
    rect(x, y, w, w * 0.31) //blue
    fill(240, 70, 100, 155)
    rect(x, y + w * 0.1, w * 0.8, w * 0.2) //black
    fill(240, 40, 100, 155)
    rect(x, y, w * 0.8, w * 0.1)
  }
  if (h > w) {
    // fill(0, 100, 0, 255)
    // rect(x, y, w * 1.4, h)
    fill(colorBlueScreen)
    rect(x, y, w, h)
    fill(240, 50, 100, 255)
    rect(x, y, h * 0.31, h) //blue
    fill(240, 70, 100, 155)
    rect(x + h * 0.1, y, h * 0.2, h * 0.8) //black
    fill(240, 40, 100, 155)
    rect(x, y, h * 0.1, h * 0.8)
  }
  if (h == w) {
    // Toggle between two states
    fill(colorBlueScreen)
    rect(x, y, w, h)
    if (y > 0 + unit || y < 0 - unit) {
      fill(240, 50, 100, 255)
      rect(x, y, w, w * 0.31) //blue
      fill(240, 70, 100, 155)
      rect(x, y + w * 0.1, w * 0.8, w * 0.2) //black
      fill(240, 40, 100, 155)
      rect(x, y, w * 0.8, w * 0.1)
    } else {
      fill(240, 50, 100, 255)
      rect(x, y, w * 0.31, w) //blue
      fill(240, 70, 100, 155)
      rect(x + w * 0.1, y, w * 0.2, w * 0.8) //black
      fill(240, 40, 100, 155)
      rect(x, y, w * 0.1, w * 0.8)
    }
  }
}
function mapTrailsDoors(x, y, w, h) {
  if (w > panelThird) {
    //large door
    fill(colorBlueScreen)
    rect(x, y, w, h)
    fill(240, 50, 100, 255)
    rect(x, y + h * 0.05, w * 0.7, h * 0.9) //blue
    fill(240, 40, 100, 255)
    rect(x, y + h * 0.4, h * 0.18, h * 0.4)
    fill(240, 70, 100, 155)
    rect(x + w * 0.1, y + h * 0.05, w * 0.2, h * 0.9) //black
    fill(240, 40, 100, 155)
    rect(x, y, h * 0.3, h * 0.8)
  }
  if (w < panelThird) {
    fill(colorBlueScreen)
    rect(x, y, w, h)
    fill(240, 50, 100, 255)
    rect(x, y + h * 0.08, w * 0.6, h) //blue
    fill(240, 70, 100, 155)
    rect(x + w * 0.1, y, w * 0.2, h) //black
    fill(240, 40, 100, 155)
    rect(x, y, h * 0.1, h * 0.8)
  }
}

function trailsMap(x, y, w, h) {
  fill(0, 100, 0, 255)
  rect(x, y, w, h)
}

function doorsMap(x, y, w, h) {
  if (w > panelThird) {
    //large door
    fill(backgroundColor)
    rect(x, y, w, h)
  }
  if (w < panelThird) {
    fill(backgroundColor)
    rect(x, y, w, h)
  }
}

function resetFurniture1() {
  // This function will be called every 4 seconds
  room01TLFurnitureSelect = random(1)
  room01TRFurnitureSelect = random(1)
  //room01BLFurnitureSelect = random(1)
  room01BRFurnitureSelect = random(1)

  // room02TLFurnitureSelect = random(1)
  room02TRFurnitureSelect = random(1)
  room02BLFurnitureSelect = random(1)
  // room02BRFurnitureSelect = random(1)

  room03TLFurnitureSelect = random(1)
  // room03TRFurnitureSelect = random(1)
  // room03BLFurnitureSelect = random(1)
  room03BRFurnitureSelect = random(1)

  room04TLFurnitureSelect = random(1)
  // room04TRFurnitureSelect = random(1)
  room04BLFurnitureSelect = random(1)
  // room04BRFurnitureSelect = random(1)

  // room05TLFurnitureSelect = random(1)
  // room05TRFurnitureSelect = random(1)
  room05BLFurnitureSelect = random(1)
  room05BRFurnitureSelect = random(1)

  room06TLFurnitureSelect = random(1)
  room06TRFurnitureSelect = random(1)
  // room06BLFurnitureSelect = random(1)
  // room06BRFurnitureSelect = random(1)

  // room07TLFurnitureSelect = random(1)
  room07TRFurnitureSelect = random(1)
  // room07BLFurnitureSelect = random(1)
  room07BRFurnitureSelect = random(1)

  room08TLFurnitureSelect = random(1)
  // room08TRFurnitureSelect = random(1)
  // room08BLFurnitureSelect = random(1)
  // room08BRFurnitureSelect = random(1)

  // room09TLFurnitureSelect = random(1)
  // room09TRFurnitureSelect = random(1)
  // room09BLFurnitureSelect = random(1)
  room09BRFurnitureSelect = random(1)

  // room10TLFurnitureSelect = random(1)
  room10TRFurnitureSelect = random(1)
  room10BLFurnitureSelect = random(1)
  room10BRFurnitureSelect = random(1)

  room11TLFurnitureSelect = random(1)
  // room11TRFurnitureSelect = random(1)
  room11BLFurnitureSelect = random(1)
  room11BRFurnitureSelect = random(1)

  room12TLFurnitureSelect = random(1)
  room12TRFurnitureSelect = random(1)
  // room12BLFurnitureSelect = random(1)
  room12BRFurnitureSelect = random(1)

  indexFurniture02 = int(random(0, 40))
  indexFurniture03 = int(random(0, 40))
  indexFurniture09 = int(random(0, 40))
  indexFurniture10 = int(random(0, 40))
  indexFurniture11 = int(random(0, 40))
  indexFurniture12 = int(random(0, 40))
}

function resetFurniture2() {
  // This function will be called every 3 seconds
  room01TLFurnitureSelect = random(1)
  // room01TRFurnitureSelect = random(1)
  // room01BLFurnitureSelect = random(1)
  room01BRFurnitureSelect = random(1)

  room02TLFurnitureSelect = random(1)
  // room02TRFurnitureSelect = random(1)
  // room02BLFurnitureSelect = random(1)
  room02BRFurnitureSelect = random(1)

  // room03TLFurnitureSelect = random(1)
  room03TRFurnitureSelect = random(1)
  room03BLFurnitureSelect = random(1)
  // room03BRFurnitureSelect = random(1)

  // room04TLFurnitureSelect = random(1)
  room04TRFurnitureSelect = random(1)
  // room04BLFurnitureSelect = random(1)
  room04BRFurnitureSelect = random(1)

  room05TLFurnitureSelect = random(1)
  room05TRFurnitureSelect = random(1)
  // room05BLFurnitureSelect = random(1)
  // room05BRFurnitureSelect = random(1)

  // room06TLFurnitureSelect = random(1)
  // room06TRFurnitureSelect = random(1)
  room06BLFurnitureSelect = random(1)
  room06BRFurnitureSelect = random(1)

  room07TLFurnitureSelect = random(1)
  //room07TRFurnitureSelect = random(1)
  room07BLFurnitureSelect = random(1)
  //room07BRFurnitureSelect = random(1)

  //room08TLFurnitureSelect = random(1)
  room08TRFurnitureSelect = random(1)
  room08BLFurnitureSelect = random(1)
  room08BRFurnitureSelect = random(1)

  room09TLFurnitureSelect = random(1)
  room09TRFurnitureSelect = random(1)
  room09BLFurnitureSelect = random(1)
  //room09BRFurnitureSelect = random(1)

  room10TLFurnitureSelect = random(1)
  // room10TRFurnitureSelect = random(1)
  // room10BLFurnitureSelect = random(1)
  // room10BRFurnitureSelect = random(1)

  //room11TLFurnitureSelect = random(1)
  room11TRFurnitureSelect = random(1)
  //room11BLFurnitureSelect = random(1)
  //room11BRFurnitureSelect = random(1)

  // room12TLFurnitureSelect = random(1)
  // room12TRFurnitureSelect = random(1)
  room12BLFurnitureSelect = random(1)
  //room12BRFurnitureSelect = random(1)

  indexFurniture01 = int(random(0, 40))
  indexFurniture04 = int(random(0, 40))
  indexFurniture05 = int(random(0, 40))
  indexFurniture06 = int(random(0, 40))
  indexFurniture07 = int(random(0, 40))
  indexFurniture08 = int(random(0, 40))
}

function resetFurniture3() {
  // This function will be called every 7 seconds
  room01TLFurnitureSelect = random(1)
  room01TRFurnitureSelect = random(1)
  room01BLFurnitureSelect = random(1)
  room01BRFurnitureSelect = random(1)

  room02TLFurnitureSelect = random(1)
  room02TRFurnitureSelect = random(1)
  room02BLFurnitureSelect = random(1)
  room02BRFurnitureSelect = random(1)

  room03TLFurnitureSelect = random(1)
  room03TRFurnitureSelect = random(1)
  room03BLFurnitureSelect = random(1)
  room03BRFurnitureSelect = random(1)

  room04TLFurnitureSelect = random(1)
  room04TRFurnitureSelect = random(1)
  room04BLFurnitureSelect = random(1)
  room04BRFurnitureSelect = random(1)

  room05TLFurnitureSelect = random(1)
  room05TRFurnitureSelect = random(1)
  room05BLFurnitureSelect = random(1)
  room05BRFurnitureSelect = random(1)

  room06TLFurnitureSelect = random(1)
  room06TRFurnitureSelect = random(1)
  room06BLFurnitureSelect = random(1)
  room06BRFurnitureSelect = random(1)

  room07TLFurnitureSelect = random(1)
  room07TRFurnitureSelect = random(1)
  room07BLFurnitureSelect = random(1)
  room07BRFurnitureSelect = random(1)

  room08TLFurnitureSelect = random(1)
  room08TRFurnitureSelect = random(1)
  room08BLFurnitureSelect = random(1)
  room08BRFurnitureSelect = random(1)

  room09TLFurnitureSelect = random(1)
  room09TRFurnitureSelect = random(1)
  room09BLFurnitureSelect = random(1)
  room09BRFurnitureSelect = random(1)

  room10TLFurnitureSelect = random(1)
  room10TRFurnitureSelect = random(1)
  room10BLFurnitureSelect = random(1)
  room10BRFurnitureSelect = random(1)

  room11TLFurnitureSelect = random(1)
  room11TRFurnitureSelect = random(1)
  room11BLFurnitureSelect = random(1)
  room11BRFurnitureSelect = random(1)

  room12TLFurnitureSelect = random(1)
  room12TRFurnitureSelect = random(1)
  room12BLFurnitureSelect = random(1)
  room12BRFurnitureSelect = random(1)

  indexFurniture01 = int(random(0, 40))
  indexFurniture02 = int(random(0, 40))
  indexFurniture03 = int(random(0, 40))
  indexFurniture04 = int(random(0, 40))
  indexFurniture05 = int(random(0, 40))
  indexFurniture06 = int(random(0, 40))
  indexFurniture07 = int(random(0, 40))
  indexFurniture08 = int(random(0, 40))
  indexFurniture09 = int(random(0, 40))
  indexFurniture10 = int(random(0, 40))
  indexFurniture11 = int(random(0, 40))
  indexFurniture12 = int(random(0, 40))
}

function resetValue() {
  intervalValue1 = random(1000, 5000)
  intervalValue2 = random(1000, 5000)
  intervalValue3 = random(1000, 5000)
}

function setLineDash(list) {
  drawingContext.setLineDash(list)
}

function blade(x, y, miniUnit) {
  strokeWeight(strokeWeightThin * 2)
  stroke(0, 0, 100, 255)
  fill(backgroundColor)

  beginShape()
  vertex(x, y + miniUnit * 1)
  vertex(x, y + miniUnit * 5)
  vertex(x + miniUnit * 6, y + miniUnit * 5)
  vertex(x + miniUnit * 9.5, y + miniUnit * 8)
  vertex(x + miniUnit * 24, y + miniUnit * 1)
  vertex(x + miniUnit * 8, y)
  vertex(x + miniUnit * 7, y + miniUnit * 1)
  endShape(CLOSE)

  fill(0, 0, 100, 255)
  beginShape()
  vertex(x + miniUnit * 9.5, y + miniUnit * 8)
  vertex(x + miniUnit * 24, y + miniUnit * 1)
  vertex(x + miniUnit * 22.8, y + miniUnit * 1)
  vertex(x + miniUnit * 9, y + miniUnit * 7.3)
  endShape(CLOSE)

  fill(backgroundColor)
  rect(
    x + miniUnit * 4,
    y + miniUnit * 3,
    miniUnit * 5,
    miniUnit * 1.5,
    miniUnit * 2
  )
}
