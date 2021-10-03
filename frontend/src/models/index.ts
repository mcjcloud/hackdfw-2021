export interface Group {
  avatar: string;
  groupName: string;
  groupDescription: string;
  members: string[];
  guid: string;
  schedule: Event[];
  channels: Channel[];
  posts: Post[];
}

export interface Channel {
  channelName: string;
  channelDescription: string;
  guid: string;
  posts: Post[];
}

export interface Post {
  channelId: string;
  title?: string;
  date: Date;
  content: string;
  mediaLink: string;
  guid: string;
}

export interface Event {
  name: string;
  date: Date;
  details: string;
  participants: string[];
  organizers: string[];
  guid: string;
  location: string;
}

export interface Interest {
  interestName: string;
  guid: string;
}

export interface Member {
  name: string;
  guid: string;
  email: string;
  username: string;
  interests: string[];
  picture?: string;
  status: string;
  groups: string[];
}

export interface Notification {
  message: string;
  type: string;
  guid: string;
}

export interface Profile {
  type: string;
  member: string;
  about: string;
}
export interface About {
  bio: string;
  outlook: string;
  identifier: string[];
  pets: string[];
  kids: string[];
  goal: string[];
  languages: string;
  local: string;
  location: string;
}

export interface Goal {
  lookingFor: string[];
}

export interface Identifier {
  gender: string;
  orientation: string;
  personalityType: string;
}

export interface Pet {
  type: string;
  breed: string;
  age: string;
  about: string;
}

export interface Kid {
  age: string;
  gender: string;
  about: string;
}

export interface Location {
  country: string;
  province: string;
  state: string;
  city: string;
  guid: string;
}

export interface Language {
  language: string;
  guid: string;
}

export interface MinorProfile {
  name: string;
  age: string;
  lookingFor: string;
  diagnosis: string;
  educationalInterests: string;
  gradeLevel: string;
  kidInterests: string;
  guid: string;
}

export interface ProfessionalProfile {
  name: string;
  picture: string;
  education: string;
  occupation: string;
  specialty: string[];
  servicesOffered: string[];
  guid: string;
}
