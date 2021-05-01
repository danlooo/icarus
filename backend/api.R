#!/usr/bin/env R
#
# icarus backend API written in plumber
#
#* @apiTitle Plumber Example API


library(plumber)

#' @filter cors
function(req, res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  
  if (req$REQUEST_METHOD == "OPTIONS") {
    res$setHeader("Access-Control-Allow-Methods","*")
    res$setHeader("Access-Control-Allow-Headers", req$HTTP_ACCESS_CONTROL_REQUEST_HEADERS)
    res$status <- 200
    return(list())
  } else {
    plumber::forward()
  }
  
}

#* Get species
#*
#* @param name the species name
#* @get /species
function(name){
  paste0(name, " sp.")
}