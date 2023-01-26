export type mySong={
  title:string;
  artist:string;
  numStream:number;
  credits:{producer:string,writer:string}
}


// readonly modifier
export type User={
  readonly id:number;
  username:string;
}

export type OptionalProperties={
  id:number;
  username:string;
  age?:number // optional
}

// intersection types
export type Circle ={
  radius : number;
}
export type Colorful = {
  color:string;
}
export type ColorfulCircle = Circle & Colorful;

export type Cat ={
  numLives:number;
}

export type Dog ={
  breed:string
}

export type catdog = Cat & Dog

export type catdogage =  Cat & Dog &{
  age:number;
}




// ========= intersection types  ===========

