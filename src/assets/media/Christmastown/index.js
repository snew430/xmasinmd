import pic1 from './Christmastown1.JPG';
import pic2 from './Christmastown2.JPG';
import pic3 from './Christmastown3.JPG';
import pic4 from './Christmastown4.JPG';
import pic5 from './Christmastown5.JPG';
import audio1 from './Christmastown.MP3';
import video1 from './Christmastown1.mp4';
import video2 from './Christmastown2.mp4';

const christmastown = {
  tab: 'ChristmasTown',
  name: 'CHRISTMAS TOWN – PITTSVILLE, MARYLAND',
  description:
    "Mike and Marsha Newton say “we live and breath Christmas.” Christmas Town helps local families with the donations received, bringing smiles and tears of joy to them. The Newtons have holiday displays illuminated from 5pm til 8pm weather permitting each evening during the holiday season at 6685 Friendship Road, Pittsville, Maryland. Please be safe when parking and please don't turn around in neighbors driveways .",
  photos: [pic1, pic2, pic3, pic4, pic5],
  videos: [
    {video: video1, poster: pic1},
    {video: video2, poster: pic2},
  ],
  audio: [audio1],
};

export default christmastown;
