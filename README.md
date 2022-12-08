**Minecraft server on Android (Termux)**

to run Minecraft, we must first install Java version 17 from Termux repositories but considering that there is no Java Run Time in the Termux repositories, we should install Java Development Kit v17 (openjdk).

first, we update the repositories:
`pkg update`

and install openjdk-17:
 `pkg install openjdk-17`
 
when the installation is complete, now we create a folder for minecraft.
before that make sure you are in the $HOME path.

for that use this command :
`cd`
or 
`cd ~`

make minecraft folder in termux :
`mkdir minecraft`

then go to the folder with :
`cd minecraft`

I used [Fabric](https://fabricmc.net/use/server/) for my server because it is possible to install performance mods on it like [Phosphor](https://www.curseforge.com/minecraft/mc-mods/phosphor) and [Lithium](https://www.curseforge.com/minecraft/mc-mods/lithium) and etc ...
download and run method mentione in the [fabric site](https://fabricmc.net/use/server/).
if your phone have low ram space just change `-Xmx2G` to `-Xmx1G`.

**Connect to Minecraft server:**

to connect to the Minecraft server, you must first find the IP address, which is different depending on the type of connection (USBcable, hotspot and etc ...).

Connecting with a USBcable:

First, connect the USB cable to your device and computer, and then activate the USB tethering option in the settings of the network or hotspot section.

![image](https://user-images.githubusercontent.com/29276037/206463027-eda5bf2f-16a1-49a8-a5ac-09fddac9736c.png)

then on the computer (i used Windows 10) click on the network icon in the taskbar to see the list of networks connected to and click on the connected network.

![image](https://user-images.githubusercontent.com/29276037/206463962-c9051949-5756-479e-a4db-f6e9a00703a4.png)
click again on network:
![image](https://user-images.githubusercontent.com/29276037/206464357-66cb9afb-10a2-48ad-980b-25fe246fee28.png)

go to the bottom of the page and find the IP server in the properties section:

![image](https://user-images.githubusercontent.com/29276037/206466075-7c5d0b38-fa5e-4ce9-937c-20226cc1f14e.png)

In fact, the IPv4 DNS server is the IP server of Minecraft.
