# gta-radio

This is a basic serveless audio player that acts like a radio, it changes the Audio tag src depending which div you click, and adds a random time to the selected file.

-Major problems with async/await | promises;
-Minor problems with mobile visuals.

Turns out the problem was right in my face the whole time, the ID returned when a click happens was returning undefined, even after using the using promises to get the audio source.

If you want to vibe to some nice GTA V music: http://gtaradio.herokuapp.com/
It supports all kind of mobiles, still working for bigger screens, but you should be fine.

![Optional Text](https://i.imgur.com/XyklH0u.png)
![Optional Text](https://i.imgur.com/usuHq5i.png)
![Optional Text](https://i.imgur.com/qaCYLjb.png)
![Optional Text](https://i.imgur.com/IUeDHHh.png)
