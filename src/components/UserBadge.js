import { AvatarBadge } from '@chakra-ui/react';
import React from 'react';

function expToLevel(exp) {
  return Math.floor(Math.sqrt(exp)/2);
}

function getBadgeColor(level) {
  if(level === 0) { // 0
    return "#cdcdcd";
  } else if(level <= 2) { // 1-2
    return "#adff2f";
  } else if(level <= 4) { // 3-4
    return "#00bfff";
  } else if(level <= 6) { // 5-6
    return "#0000ff";
  } else if(level <= 8) { // 7-8
    return "#8a2be2";
  }
}

function getBadgeTextColor(level) {
  if(level === 0) {
    return "black";
  } else if(level <= 2) {
    return "black";
  } else if(level <= 8) {
    return "white";
  }
}

const UserBadge = ({ exp }) => {
  const level = expToLevel(exp);
  return (  
    <AvatarBadge boxSize="1em" bg={getBadgeColor(level)} style={{ border: "2px solid white" }}>
      <span style={{ color: getBadgeTextColor(level), fontWeight: "600", fontSize: 12 }}>{level}</span>
    </AvatarBadge>
  );
}
 
export default UserBadge;