**Minecraft server on Android (Termux)**

To run Minecraft, we must first install Java version 17 from Termux repositories but considering that there is no Java Run Time in the Termux repositories, we install the Java Development Kit v17 (openjdk).

First, we update the repositories:

`pkg update`

and then install openjdk-17:

 `pkg install openjdk-17`
 
When the installation is complete, now we will create a folder for minecraft.

before making sure that we are in the $HOME path for this use this command :

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
