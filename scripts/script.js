const painters = [
  {
    firstName: "Herb",
    lastName: "Aach",
    born: 1923,
    passed: 1985,
    paintings: 12
  },
  {
    firstName: "Pacita",
    lastName: "Abad",
    born: 1946,
    passed: 2004,
    paintings: 52
  },
  {
    firstName: "Daniel",
    lastName: "Maclise",
    born: 1806,
    passed: 1870,
    paintings: 2
  },
  {
    firstName: "Aileen",
    lastName: "Eagleton",
    born: 1902,
    passed: 1984,
    paintings: 35
  },
  {
    firstName: "Thomas",
    lastName: "Eakins",
    born: 1844,
    passed: 1916,
    paintings: 1
  },
  {
    firstName: "Edgar",
    lastName: "Degas ",
    born: 1834,
    passed: 1917,
    paintings: 34
  },
  {
    firstName: "Martin",
    lastName: "Desjardins",
    born: 1637,
    passed: 1694,
    paintings: 7
  }
];

const clients = [
  "Fiona, Bownd",
  "Bren, Strutt",
  "Cletis, Cobelli",
  "Booth, Kedge",
  "Demetris, Parman",
  "Cull, Itzhaki",
  "Ertha, Bikker",
  "Maggi, Stockport",
  "Horace, Hearthfield",
  "Vassili, Pomfret",
  "Cirilo, Zottoli",
  "Trueman, MacDermot",
  "Karla, Spencer",
  "Allys, McManamon",
  "Saloma, Boolsen",
  "Giacomo, Vedntyev",
  "Essa, Blacket",
  "Dari, Muncer",
  "Jobi, Joscelyn",
  "Eimile, Joberne"
];

const cars = [
  "Honda",
  "Saab",
  "Ford",
  "Mitsubishi",
  "Buick",
  "Toyota",
  "Mitsubishi",
  "Mercedes-Ben",
  "Buick",
  "Volvo",
  "Oldsmobile",
  "Mercedes-Ben",
  "Chevrolet",
  "Volkswagen",
  "GMC",
  "Chevrolet",
  "Jeep",
  "Acura",
  "Acura",
  "Suzuki"
];

// console.table(painters);
//------------------------------------------------------------
// 1. Array Length
// console.log("painters length", painters.length);
// console.log("clients length", clients.length);
// console.log("cars length", cars.length);
//------------------------------------------------------------
// 2. Array Iteration with FOR & foreach
// for (let i = 0; i < painters.length; i++) {
//   console.log(painters[i]);
// }

// painters.forEach(painter => {
//   console.log(painter);
// });
//------------------------------------------------------------
// 3. String to array .split
// const myFavFood = "Pizza, Pasta, Burger";
// console.log(myFavFood.split(", "));
// const myFavSports = ["Football", "Hockey", "Yoga"];
// console.log(myFavSports.join(", "));
//------------------------------------------------------------
// 4. Array .filter()
// const filteredPainters = painters.filter(painter => {
//   if (painter.born >= 1800 && painter.born < 1900) return painter;
// });
// console.table(filteredPainters);

// const filteredPainters = painters.filter(
//   painter => painter.born >= 1800 && painter.born < 1900
// );
// console.table(filteredPainters);
//------------------------------------------------------------
// 5. Array .map()
// const paintersWithYears = painters.map(painter => {
//   const newPainter = {
//     fullName: `${painter.firstName} ${painter.lastName}`,
//     years: `${painter.born} - ${painter.passed}`
//   };
//   return newPainter;
// });
// console.table(paintersWithYears);

// const paintersWithYears = painters.map(painter => {
//   return {
//     fullName: `${painter.firstName} ${painter.lastName}`,
//     years: `${painter.born} - ${painter.passed}`
//   };
// });
// console.table(paintersWithYears);
//------------------------------------------------------------
// 6. Array .sort()
// Sort painters by years lived
// const sortedPainters = painters.sort((currentPainter, nextPainter) => {
//   const currentPainterYears = currentPainter.passed - currentPainter.born;
//   const nextPainterYears = nextPainter.passed - nextPainter.born;
//   // console.log(currentPainterYears, nextPainterYears);
//   if (currentPainterYears > nextPainterYears) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.table(sortedPainters);

// const sortedPainters = painters.sort((currentPainter, nextPainter) => {
//   const currentPainterYears = currentPainter.passed - currentPainter.born;
//   const nextPainterYears = nextPainter.passed - nextPainter.born;
//   // console.log(currentPainterYears, nextPainterYears);
//   return currentPainterYears > nextPainterYears ? -1 : 1;
// });

// console.table(sortedPainters);

// const sortedPainters = painters
//   .map(painter => {
//     return {
//       fullName: `${painter.firstName} ${painter.lastName}`,
//       years: `${painter.born} - ${painter.passed}`,
//       age: painter.passed - painter.born
//     };
//   })
//   .sort((currentPainter, nextPainter) => {
//     return currentPainter.age > nextPainter.age ? -1 : 1;
//   });

// console.table(sortedPainters);

// const sortedPainters = painters
//   .map(painter => {
//     return {
//       fullName: `${painter.firstName} ${painter.lastName}`,
//       years: `${painter.born} - ${painter.passed}`,
//       age: painter.passed - painter.born
//     };
//   })
//   .sort((currentPainter, nextPainter) =>
//     currentPainter.age > nextPainter.age ? -1 : 1
//   );

// console.table(sortedPainters);

// const sortedPaintersPaintings = painters.sort((currentPainter, nextPainter) =>
//   currentPainter.paintings > nextPainter.paintings ? -1 : 1
// );
// console.table(sortedPaintersPaintings);
//------------------------------------------------------------
// Sort client by lastName-----------------------
// const sortedClients = clients.sort((lastClient, nextClient) => {
//   const [lastClientFirstName, lastClientLastName] = lastClient.split(", ");
//   const [nextClientFirstName, nextClientLastName] = nextClient.split(", ");
//   return lastClientLastName > nextClientLastName ? 1 : -1;
// });

// console.table(sortedClients);
//------------------------------------------------------------
// 7. Array .reduce()
// Total amound of paintings
// const totalPaintings = painters.reduce((amount, painter) => {
//   return amount + painter.paintings;
// }, 0);

// console.log("Total paintings: ", totalPaintings);
// Sum app cars--------------------------------------
// const carsReduced = cars.reduce((obj, car) => {
//   if (!obj[car]) {
//     obj[car] = 0;
//   }
//   obj[car]++;
//   return obj;
// }, {});

// console.log(carsReduced);

//----------sum word------------------------------------------------
(function() {
  findElements();
})();

function findElements() {
  const elemTextArea = document.getElementById("myTextarea");
  const elemButton = document.getElementById("checkBtn");
  elemButton.addEventListener("click", () => {
    countWord(elemTextArea);
  });
  const elemButtonClear = document.getElementById("checkClear");
  elemButtonClear.addEventListener("click", () => {
    delLi();
  });
}

function countWord(elemTextArea) {
  //alert("click!");
  let txt = elemTextArea.value.toLowerCase();
  txt = txt.replace(/\./g, ""); //заменяю точки
  const arrWord = txt.split(/\s|,\s/g); //split " " | ", "
  //console.log(arrWord);

  //подсчет------------------------
  const mountWord = arrWord.reduce((obj, word) => {
    if (!obj[word]) {
      obj[word] = 0;
    }
    obj[word]++;
    return obj;
  }, {});

  //console.table(mountWord);
  //сортировка----------------------
  let sortable = [];
  for (let word in mountWord) {
    sortable.push([word, mountWord[word]]);
  }
  // console.log("check1", sortable);
  sortable.sort((a, b) => {
    return b[1] - a[1];
  });
  // console.log("check2", sortable);
  let objSorted = {};
  sortable.forEach(function(item) {
    objSorted[item[0]] = item[1];
  });
  console.log("check3", objSorted);
  //addToList(mountWord);
  addToList(objSorted);
}
//-----------------------------------
function addToList(value) {
  const checkbox = document.getElementById("checkbox");
  console.log(checkbox.checked);
  let wordTextItem;
  for (let i in value) {
    // console.log(i + " - " + value[i]);
    if (checkbox.checked) {
      wordTextItem = i + " - " + value[i];
    } else {
      wordTextItem = i;
    }

    if (i.length > 3) {
      addElemLiItem(wordTextItem); //добавляю слова в которых только больше 3 букв
    }
  }
}

function addElemLiItem(value) {
  const list = document.getElementById("listResult");
  const newLi = getLiWithText(value);
  list.appendChild(newLi);
}

function getLiWithText(value) {
  const newListItem = document.createElement("li");
  const text = document.createTextNode(value);
  newListItem.appendChild(text);
  return newListItem;
}

function delLi() {
  const list = document.getElementById("listResult");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
