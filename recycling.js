window.addEventListener("load", onload);
function onload(){
document.getElementById("add").addEventListener("click", recycle);


}
function recycle(){
let cell1 = document.getElementById("cell");
var response = document.getElementById("materialResponse").value;
response = response.toLowerCase();
if (response === "aluminum"){
cell1.innerHTML = '<ol><li>Bring to a recycling or scrap metal center to sell!</li><ul><li>It takes on average thirty aluminum cans to make up a pound, and a pound is worth about $0.44 right now. This puts each can worth about 1 and a half cents.</li><li>Rocky Mount Recyclers</li><li>OmniSource Corporation</li> <li>Wall Recycling</li><li>Durham, Raleigh, Fayetteville, Goldsboro, Wilson</li><li>Also takes bicycles, lawn furniture, light fixtures, x-Ray film</li><li>Metal Recycling Services</li><li>Monroe, Gastonia, Whiteville</li></ul></ol><ul><li><a href="https://youtu.be/DRLYU_B3xP8?si=bey6gW6DDmR0tmrs">Want to Learn More? Click Here and Leave Us Questions and Feedback!</a></li><ul>';
}
else if (response === "cardboard" || response === "box"){
cell1.innerHTML = '<ul><li>Bring to a recycling center!</li></ul> <ol><li>Postcards</li><li>Organizers (Drawers, storage containers...)</li><li>Gardening (Weed control, plant holders…)</li><li>Animal homes(Cats, dogs, rabbits, guinea pigs, ducks, chickens, hamsters, mice…)</li></ol><li>Warning: Watch out for bugs!</li><a href="https://youtu.be/c9YL6zBe7Zs?si=vp8MyCnBoAIdnbRi">Want to Learn More? Click Here and Leave Us Questions and Feedback!</a>';
}
else if (response === "clothes" || response === "cotton" || response === "linen" || response ===
"polyester" || response === "cloth" || response === "pants" || response === "shirt" || response === "jacket"){
cell1.innerHTML = '<ol><li>Upcycle (crops, cut, sew)</li><li>Donate (Goodwill, Salvation Army, small business thrift stores, homeless shelter…)</li><li>Sell online (Depop, Mercari, Poshmark, eBay, thredUP…)</li><li>Trade (Facebook pages, flea markets…)</li><li>Consign at a local consignment shop</li><li>Pass on to a sibling, friend, or family member</li></ol>';
}
else if (response === "hard plastic" || response === "water bottles" || response === "bottes" || response === "plastic containers"){
cell1.innerHTML = '<ol><li>Get creative!</li><ul><li>Use as flower pots</li></ul><ul><li>Make a bird feeder</li></ul><li>Place in commingled recycling</li><li>Melt it! Create your own 3D designs with melted plastic.<li>(Warning: This can be very dangerous! Do not let your plastic burn, always have proper ventilation and make sure to wear protective gear, including a facemask to reduce inhalation. The chemicals in plastic can become very toxic whenever they are melted!)</li><li>Reuse containers (Store leftovers, give away baked goods, use for gift packaging, use for general storage…)</li><ul><li>Give away baked goods</li><li>Use for gift packaging</li><li>Use for general storage</li></ul></ol>';
}
else if (response === "soft plastic" || response === "plastic bags" || response === "grocery bags" || response === "plastic wrappers"){
cell1.innerHTML = '<ol><li>Recycle grocery bags at your local grocery store</li><ul><li>Prevent the use of grocery bags by bringing your own reusable bag!</li></ul><li>Use your soft plastic to cushion things in storage</li><ul><li>Absorbs shock</li></ul><li>Bring to a recycling center that accepts soft plastics</li><ul><li>“Scrunchable” plastic like: Chip bags, plastic wrap, cereal box liners, snack wrappers candy wrappers grocery bags</li></ul></ol>';
}
else if (response === "paper"){
cell1.innerHTML = '<ol><li>Drop off at a recycling center where they will mix it with water, break it down, and make new rolls of paper.</li><li>Papier mache crafts</li><li>Litter box liner</li><li>Table protector for painting</li><li>Use it as scratch paper (Mathematics, calculations, art, note taking…)</li><li>Make paper flowers</li><li>Origami</li></ol>';
}
else if (response === "glass" || response === "letters"){
cell1.innerHTML = '<ol><li>Glass can be recycled at many locations even whenever it’s broken (Local authorities, bottle banks, shopping centers)</li><li>Reuse unbroken glass! (Bottles, jars, containers…)</li><li>Glass art</li></ol>';
}
else if (response === "organics" || response === "food" || response === "food waste"){
cell1.innerHTML = '<ol><li>Compost</li><li><Feed to pets (Don’t feed the wild)</li><li>Donate extra food to a homeless shelter, church, fire department, or food bank. (Canned goods and dry goods are best for this)</li><li>Grow your own organic food</li></ol>';
}
else{
cell1.innerHTML = "At this point, we do not have instructions on how to recycle this but are always looking for new ways to improve sustainability!"
}

}
