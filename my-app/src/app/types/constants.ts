import { mySong,User,OptionalProperties,Circle,Colorful,ColorfulCircle,catdog,catdogage,Cat,Dog } from '../types/type';

export const mycustomtype:mySong={
  title:"Unchained Melody",
  artist:"Rigteous Brothers",
  numStream:10,
  credits:{
    producer:"Phil Sector",
    writer:"Alex North"
    }
}

export const user:User={
  id:123,
  username:'TestUser'
}

export const optional:OptionalProperties={
  id:123,
  username:'TestUser'
}

export const happyFace: ColorfulCircle = {
  radius:4;
  color:"yellow"
}

// intersection types
export const christy:catdogage = {
  numLives:9,
  breed:'Husy',
  age:9,
}
