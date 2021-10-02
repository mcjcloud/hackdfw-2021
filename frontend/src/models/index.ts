export interface Group {
  groupName: string;
  groupDescription: string;
  members: string[];
  guid: string;
  schedule: Event[];
  channels: Channel[];
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
