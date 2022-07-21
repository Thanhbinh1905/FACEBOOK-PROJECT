const miniIcons = document.querySelectorAll(".miniIcons")
const dropdownTwo = document.querySelector(".dropdownTwo")
const dropdownTwoPartOne = document.querySelector(".dropdownTwoPartOne")
const close = document.querySelector(".closeElement")
const bellIcon = document.querySelector(".bellIcon")
const dropdownBell = document.querySelector(".bellDropdown")
const defColor = document.querySelectorAll(".defColor")

miniIcons.forEach(function(item) {
  item.onclick = function() {
    miniIcons.forEach(function(itemTwo) {
      if (item === itemTwo) {
        itemTwo.style.color = "white"
      } else {
        itemTwo.style.color = "rgb(226, 226, 226)"
      }
    })
  }
})

dropdownTwo.onclick = function() {
  dropdownTwoPartOne.classList.toggle("dropdownTwoPartOneToggle")
  close.style.display = "block"
}

bellIcon.onclick = function() {
  dropdownBell.classList.toggle("bellList")
  close.style.display = "block"
}

close.onclick = function() {
  dropdownTwoPartOne.classList.remove("dropdownTwoPartOneToggle")
  close.style.display = "none"
  dropdownBell.classList.remove("bellList")
  close.style.display = "none"
  dropdownItems.classList.remove("dropdownItemsOpen")
  close.style.display = "none"
  newChatList.classList.remove("newChatList")
  close.style.display = "none"
  dropdownItems.style.display = "none"
  groupList.classList.remove("groupList")
  invite.classList.remove("inviteList")
  menuForTranslator.classList.remove("translatorList")
  close.style.display = "none"
  engItem.classList.remove("engItems")
  close.style.display = "none"
  latItem.classList.remove("latItems")
  close.style.display = "none"
  menuForNotes.classList.remove("noteList")
  close.style.display = "none"
  allNotesDdItemss.classList.remove("itemssList")
  close.style.display = "none"
  addNoteItemsss.classList.remove("nItemsList")
  close.style.display = "none"
  menuForSettings.classList.remove("settingsList")
  close.style.display = "none"
  menuForTask.classList.remove("taskList")
  close.style.display = "none"
  taskDdItems.classList.remove("taskItmList")
  close.style.display = "none"
  taskItems.classList.remove("taskItemsList")
  close.style.display = "none"
}


// all chats

const chates = document.querySelectorAll(".chates")

// end all chates


// categorie friends

const friends = document.querySelectorAll(".friends")

// end categorie friends

// categorie groups

const groups = document.querySelectorAll(".groups")

// end categorie groups

// caegorie unread

const unread = document.querySelectorAll(".unread")

// end categorie unread

// categorie archived

const archived = document.querySelectorAll(".archived")

// end categorie archived

const allChatsBtn = document.querySelector(".clickAllChats")
const friendsBtn = document.querySelector(".clickFriends")
const groupsBtn = document.querySelector(".clickGroups")
const unreadBtn = document.querySelector(".clickUnread")
const archivedBtn = document.querySelector(".clickArchived")

allChatsBtn.onclick = function() {
  chates.forEach(function(item) {
    item.style.display = "block"
  })

  dropdownTwoPartOne.classList.remove("dropdownTwoPartOneToggle")
  dropdownTwo.innerHTML = "All chats"
  close.style.display = "none"
}

friendsBtn.onclick = function() {
  chates.forEach(function(item) {
    item.style.display = "none"
  })

  friends.forEach(function(item) {
    item.style.display = "block"
  })

  dropdownTwoPartOne.classList.remove("dropdownTwoPartOneToggle")
  dropdownTwo.innerHTML = "Friends"
  close.style.display = "none"
}

groupsBtn.onclick = function() {
  chates.forEach(function(item) {
    item.style.display = "none"
  })

  groups.forEach(function(item) {
    item.style.display = "block"
  })

  dropdownTwoPartOne.classList.remove("dropdownTwoPartOneToggle")
  dropdownTwo.innerHTML = "Groups"
  close.style.display = "none"
}

unreadBtn.onclick = function() {
  chates.forEach(function(item) {
    item.style.display = "none"
  })

  unread.forEach(function(item) {
    item.style.display = "block"
  })

  dropdownTwoPartOne.classList.remove("dropdownTwoPartOneToggle")
  dropdownTwo.innerHTML = "Unread"
  close.style.display = "none"
}

archivedBtn.onclick = function() {
  chates.forEach(function(item) {
    item.style.display = "none"
  })

  archived.forEach(function(item) {
    item.style.display = "block"
  })

  dropdownTwoPartOne.classList.remove("dropdownTwoPartOneToggle")
  dropdownTwo.innerHTML = "Archived"
  close.style.display = "none"
}


const dropdown = document.querySelector(".dropdown")
const dropdownItems = document.querySelector(".dropdownItems")

dropdown.onclick = function() {
  dropdownItems.classList.toggle("dropdownItemsOpen")
  close.style.display = "block"
  dropdownItems.style.display = "block"
}

const newChat = document.querySelector(".newChat")
const newChatList = document.querySelector(".menuForNewChat")

newChat.onclick = function() {
  newChatList.classList.toggle("newChatList")
  dropdownItems.style.display = "none"
  close.style.display = "block"
}

const createGroup = document.querySelector(".createGroup")
const groupList = document.querySelector(".menuForCreatingGroup")

createGroup.onclick = function() {
  groupList.classList.toggle("groupList")
  dropdownItems.style.display = "none"
  close.style.display = "block"
}

const inviteOthers = document.querySelector(".inviteOthers")
const invite = document.querySelector(".inviteOthersItems ")

inviteOthers.onclick = function() {
  invite.classList.toggle("inviteList")
  dropdownItems.style.display = "none"
  close.style.display = "block"
}


// second menu color changes

// const colorChange = document.querySelectorAll(".defColor")

// colorChange.forEach(function(item) {
//   item.onclick = function() {
//     colorChange.forEach(function(itemTwo) {
//       if (item == itemTwo) {
//         itemTwo.style.color = "white"
//       } else {
//         itemTwo.style.color = "rgb(158, 158, 158)"
//       }
//     })
//   }
// })

// end second menu color changes


const translator = document.querySelector(".translator")
let menuForTranslator = document.querySelector(".menuForTranslator")

translator.onclick = function() {
  translator.style.color = "white"
  menuForTranslator.classList.toggle("translatorList")
  close.style.display = "block"
}

let english = document.querySelector(".english")
let latin = document.querySelector(".latin")

let engItem = document.querySelector(".itemsLang")
let latItem = document.querySelector(".itemsLangTwo")

english.onclick = function() {
  engItem.classList.toggle("engItems")
  close.style.display = "block"
  latItem.classList.remove("latItems")
}

latin.onclick = function() {
  latItem.classList.toggle("latItems")
  close.style.display = "block"
  engItem.classList.remove("engItems")
}

let englishTwo = document.querySelector(".englishTwo")
let hindi = document.querySelector(".hindi")
let irish = document.querySelector(".irish")
let latinTwo = document.querySelector(".latinTwo")

let englishTwoo = document.querySelector(".englishTwoo")
let hindii = document.querySelector(".hindii")
let irishh = document.querySelector(".irishh")
let latinTwoo = document.querySelector(".latinTwoo")


englishTwo.onclick = function() {
  english.innerHTML = "English"
  engItem.style.display = "none"
  close.style.display = "none"
}

english.onclick = function() {
  engItem.style.display = "block"
}

latin.onclick = function() {
  latItem.style.display = "block"
}

hindi.onclick = function() {
  english.innerHTML = "Hindi"
  engItem.style.display = "none"
  close.style.display = "none"
}

irish.onclick = function() {
  english.innerHTML = "Irish"
  engItem.style.display = "none"
  close.style.display = "none"
}

latinTwo.onclick = function() {
  english.innerHTML = "Latin"
  engItem.style.display = "none"
  close.style.display = "none"
}

englishTwoo.onclick = function() {
  latin.innerHTML = "English"
  latItem.style.display = "none"
  close.style.display = "none"
}

hindii.onclick = function() {
  latin.innerHTML = "Hindi"
  latItem.style.display = "none"
  close.style.display = "none"
}

irishh.onclick = function() {
  latin.innerHTML = "Irish"
  latItem.style.display = "none"
  close.style.display = "none"
}

latinTwoo.onclick = function() {
  latin.innerHTML = "Latin"
  latItem.style.display = "none"
  close.style.display = "none"
}

const closeeLl = document.querySelector(".closeeLl")

closeeLl.onclick = function() {
  menuForTranslator.classList.remove("translatorList")
  close.style.display = "none"
}

const notes = document.querySelector(".notes")
const menuForNotes = document.querySelector(".menuForNotes")

notes.onclick = function() {
  notes.style.color = "white"
  menuForNotes.classList.toggle("noteList")
  close.style.display = "block"
}

const allNotesDd = document.querySelector('.allNotesDd')
const allNotesDdItemss = document.querySelector(".allNotesDdItemss")
const itemsTitlle = document.querySelectorAll(".itemsTitlle")

allNotesDd.onclick = function() {
  allNotesDdItemss.classList.toggle("itemssList")
  close.style.display = "block"
}

const clloseNotesDd = document.querySelector(".clloseNotesDd")

clloseNotesDd.onclick = function() {
  menuForNotes.classList.remove("noteList")
  close.style.display = "none"
}

itemsTitlle.forEach(function(item) {
  item.onclick = function() {
    allNotesDdItemss.classList.remove("itemssList")
    close.style.display = "none"
  }
})

const addNote = document.querySelector(".addNote")
const addNoteItemsss = document.querySelector(".addNoteItemsss")

addNote.onclick = function() {
  addNoteItemsss.classList.toggle("nItemsList")
  close.style.display = "block"
}

const closeNotTitle = document.querySelector(".closeNotTitle")

closeNotTitle.onclick = function() {
  dropdownBell.classList.remove("bellList")
  close.style.display = "none"
}

const closeeее = document.querySelector(".closee")

closeeее.onclick = function() {
  newChatList.classList.remove("newChatList")
  close.style.display = "none"
}

const clear = document.querySelector(".clear")
const firstRequest = document.querySelector(".firstRequest")
const secondRequest = document.querySelector(".secondRequest")
const thirdRequest = document.querySelector(".thirdRequest")
const fourthRequest = document.querySelector(".fourthRequest")
const fivedRequest = document.querySelector(".fivedRequest")

clear.onclick = function() {
  firstRequest.style.display = "none"
  secondRequest.style.display = "none"
  thirdRequest.style.display = "none"
  fourthRequest.style.display = "none"
  fivedRequest.style.display = "none"
  clear.style.display = "none"
  close.style.display = "none"
}

const closeeeee = document.querySelector(".closeeeee")

closeeeee.onclick = function() {
  groupList.classList.remove("groupList")
  close.style.display = "none"
}

const closeeeeee = document.querySelector(".closeeeeee")

closeeeeee.onclick = function() {
  invite.classList.remove("inviteList")
  close.style.display = "none"
}

closeeeNn = document.querySelector(".closeee")

closeeeNn.onclick = function() {
  addNoteItemsss.classList.remove("nItemsList")
  close.style.display = "none"
}

const settings = document.querySelector(".settings")
const settingsClose = document.querySelector(".settingsClose")
const menuForSettings = document.querySelector(".menuForSettings")

settings.onclick = function() {
  menuForSettings.classList.toggle("settingsList")
  close.style.display = "block"
}

settingsClose.onclick = function() {
  menuForSettings.classList.remove("settingsList")
  close.style.display = "none"
}

const allTaskDd = document.querySelector(".allTasksDd")
const taskDdItems = document.querySelector(".taskDdItems")

allTaskDd.onclick = function() {
  taskDdItems.classList.toggle("taskItmList")
  close.style.display = "block"
}

const taskItemsTitle = document.querySelectorAll(".taskItemsTitle")

taskItemsTitle.forEach(item => {
  item.onclick = function() {
    taskDdItems.classList.remove("taskItmList")
    close.style.display = "none"
  }
})

const dinner = document.querySelectorAll(".dinner")
let doubleClick = 0

dinner.forEach(function(item) {
  item.onclick = function() {
    if (doubleClick % 2 == 0) {
      item.style.textDecoration = "line-through"
    } else {
      item.style.textDecoration = "none"
    }
    doubleClick++
  }
})

const menuForTask = document.querySelector(".menuForTask")
const todo = document.querySelector(".todo")

todo.onclick = function() {
  menuForTask.classList.toggle("taskList")
  close.style.display = "block"
}

const taskClose = document.querySelector(".taskClose")

taskClose.onclick = function() {
  menuForTask.classList.remove("taskList")
  close.style.display = "none"
}

const addTaskBigBtn = document.querySelector(".addTaskBigBtn")
const taskItems = document.querySelector(".taskItems")
const taskClosed = document.querySelector(".taskClosed")

addTaskBigBtn.onclick = function() {
  taskItems.classList.toggle("taskItemsList")
  close.style.display = "block"
}

taskClosed.onclick = function() {
  taskItems.style.display = "none"
}

const welcome = document.querySelector(".welcome")
const conversationBlock = document.querySelector(".conversationBlock")
const startCoversation = document.querySelector(".startCoversation")
const closeElementTwo = document.querySelector(".closeElementTwo")
const convClose = document.querySelector(".convClose")

startCoversation.onclick = function() {
  conversationBlock.classList.toggle("conversationList")
  closeElementTwo.style.display = "block"
}

closeElementTwo.onclick = function() {
  conversationBlock.classList.remove("conversationList")
  closeElementTwo.style.display = "none"
}

convClose.onclick = function() {
  conversationBlock.classList.remove("conversationList")
  closeElementTwo.style.display = "none"
}

const timeToWrite = document.querySelector(".timeToWrite")
const catherineRichardson = document.querySelector(".catherineRichardson")
const catherineRichardsonChat = document.querySelector(".catherineRichardsonChat")
const forText = document.querySelector(".forText")

catherineRichardson.onclick = function() {
  catherineRichardson.style.background = "#2D88FF1A"
  chatForGroups.style.background = "none"
  forText.style.color = "white"
  catherineRichardsonChat.style.display = "block"
  themeForestGroup.style.display = "none"
  welcome.style.display = "none"
}

const caherineSearch = document.querySelector(".caherineSearch")
const searchCaherineDiv = document.querySelector(".searchCaherineDiv")

caherineSearch.onclick = function () {
  searchCaherineDiv.classList.toggle("messageSearchList")
  searchCaherineDiv.style.height = "55px"
}

const view = document.querySelector(".view")
const viewTwo = document.querySelector(".viewTwo")
const viewInfo = document.querySelector(".viewInfo")
const closeThree = document.querySelector(".closeElementThree")
const viewGroupInformation = document.querySelector(".viewGroupInformation")
const viewItems = document.querySelectorAll(".viewItems")

view.onclick = function () {
  closeThree.style.display = "block"
  viewInfo.classList.toggle("viewList")
}

viewTwo.onclick = function() {
  closeThree.style.display = "block"
  viewGroupInformation.classList.toggle("groupInformationList")
}

closeThree.onclick = function () {
  viewInfo.classList.remove("viewList")
  closeThree.style.display = "none"
}

viewItems.forEach(function (item) {
  item.onclick = function () {
    viewInfo.classList.remove("viewList")
    closeThree.style.display = "none"
  }
})

const addressInformation = document.querySelector(".addressInformation")
const addressInfoTitle = document.querySelector(".addressInfoTitle")
const viewINF = document.querySelector(".viewINF")
const secondView = document.querySelector(".viewINFsec")
const profileDetails = document.querySelector(".profileDetails")
const groupDetials = document.querySelector(".groupProfileDetials")
const closeDetails = document.querySelector(".closeDetails")

addressInfoTitle.onclick = () => {
  addressInformation.classList.toggle("height")
}

viewINF.onclick = function () {
  profileDetails.classList.toggle("userINFlist")
}

secondView.onclick = function() {
 groupDetials.classList.toggle("userINFsec")
}

closeDetails.onclick = function () {
  profileDetails.classList.toggle("userINFlist")
}

const lastImages = document.querySelector(".lastImages")
const mediaInformation = document.querySelector(".mediaInformation")

lastImages.onclick = () => {
  mediaInformation.classList.toggle("mediaList")
}

const documents = document.querySelector(".documents")
const documentInfo = document.querySelector(".documentInformation")

documents.onclick = () => {
  documentInfo.classList.toggle("docInfoList")
}

const themeForestGroup = document.querySelector(".themeForestGroup")
const chatForGroups = document.querySelector(".chatForGroups")

chatForGroups.onclick = function() {
  catherineRichardson.style.background = "none"
  chatForGroups.style.background = "#2D88FF1A"
  forText.style.color = "white"
  catherineRichardsonChat.style.display = "none"
  themeForestGroup.style.display = "block"
  welcome.style.display = "none"
}

const groupUsers = document.querySelector(".groupUsers")
const groupUsersList = document.querySelector(".groupUsersList")

groupUsers.onclick = () => {
  groupUsersList.classList.toggle("groupHeight")
}

const lastGroupImages = document.querySelector(".lastGroupImages")
const groupMediaInformation = document.querySelector(".groupMediaInformation")

lastGroupImages.onclick = () => {
  groupMediaInformation.classList.toggle("groupMediaList")
}

const groupDocumentInformation = document.querySelector(".groupDocumentInformation")
const groupDocumentItems = document.querySelector(".groupDocumentItems")
const cloze = document.querySelector(".cloze")
const groupProfileDetials = document.querySelector(".groupProfileDetials")

groupDocumentInformation.onclick = () => {
  groupDocumentItems.classList.toggle("gdItemsList")
}

cloze.onclick = () => {
  groupProfileDetials.style.display = "none"
  viewGroupInformation.style.display = "none"
}