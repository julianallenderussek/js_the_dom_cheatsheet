
// Selecting Items
var mainTitle = document.getElementById('main-title') 
var item_list = document.getElementsByTagName('li')

// Using querySelectorAll - This gives back a Node List (We can use array methosds) 
var item_list_with_querySelector = document.querySelectorAll('.list-element')

// Using querySelector (get first element that matches the search)
var item_one = document.querySelector('.list-element')

// Using .children and parent Selectors
var list_group = document.getElementsByClassName('list-group')[0]
var first_child = list_group.firstElementChild
var parent = first_child.parentElement

// Selecting by Tag
