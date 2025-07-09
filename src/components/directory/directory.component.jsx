import React, { Component } from "react";
import "./directory.styles.scss";
import { MenuItem } from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../features/directory/directory.selectors";
import { useSelector } from "react-redux";


export const Directory = () => {
  const sections = useSelector(selectDirectorySections)
  return(
      <div className="directory-menu">
          {
              sections.map(({ id , ...otherProps}) => (
                  <MenuItem key={id} {...otherProps}/>
              ))
          }
      </div>
  )
}

export default Directory;
