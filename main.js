var l = function(what) { return document.getElementById(what) };

const onClick = (elem, callback) => {
	l(elem).onclick = (ev) => callback(l(elem));
}
const SIDE_NAV = l('nav');
const SECTIONS = l('sections');


const createSection = (elemId, text, onclick) => {

	var a = document.createElement("a");
	a.id = elemId;
	a.href = 'javascript:void(0);';
	a.innerText = text;
	a.onclick = function() {
		onclick();
	}
	SIDE_NAV.appendChild(a);
}

createSection("home", "Home", () => {
	SECTIONS.innerHTML = `<h1 style='text-align: center; background-image: url("3d_printer_main_page.jpg"); background-size: cover; height: 1000px'><strong>3D Printing: An Overview</strong</h1></div>`
});

createSection("intro", "Intro", () => {
	SECTIONS.innerHTML = createHeading("Introduction") + `
	<p>
		3D Printing is a new technology which revolutionizes the way humans manufacture 3D products.
		3D Printers create objects layer by layer using provided materials. This website offers as a guide and introduction to those new or unfamiliar with the topic.
	</p>
	`
})

createSection("fundamentals", "Fundamentals", () => {
	SECTIONS.innerHTML = createHeading("Fundamentals") +
		`
		<p> To create an object, the 3D printer is given a file created by a programmer or a product designer, often called a CAD file. Then, the printer translates this code into instructions, and uses the given materials to attempt to build it; whether that material be plastic, metal, or what have you. The object is printed from the ground up, and this process could take up to several days or weeks, depending on the size of the object and strength of the printer.</p>
		`
})

createSection("addvsub", "Additive vs. Subtractive", () => {
	SECTIONS.innerHTML = createHeading("Additive vs. Subtractive Processes") +
		`
			<p>The traditional way of creation, i.e as a carpenter carves wood to create a table, is called a <em>Subtractive Process</em>. A subtractive process involes removing material from a solid block of starting material. However, 3D printing uses what is called an <em>Additive Process</em>. This process starts from scratch, building from the ground up layer by layer, guided by its instructions.</p>
		`
})
createSection("industries", "Industries Using 3D Printing", () => {
	SECTIONS.innerHTML = createHeading("Examples of Industries Using 3D Printing") +
		`
			<p> 
				<ul>
					<li><strong>Commerce</strong>:
						<p>
							Companies such as Nike use 3D printing to save time and resources while developing prototype products.
						</p>
					</li>
					<li><strong>Architectural</strong>:
						<p>
							The versatility, flexibility, and precision of 3D printers allow architects to create intricate models of structures, allowing for faster development.
						</p>
					</li>
					<li><strong>Medical</strong>:
						<p>
							Medical professionals have been experimenting with 3D printers in an attempt to print human tissue and organs. If successful, this could streamline organ transplants, removing the need for a donor to perform life-saving operations.
						</p>
					</li>
				</ul>
				
		`

})
createSection("advanced_techniques", "Advanced Printing Techniques", () => {
	SECTIONS.innerHTML = createHeading("Advanced Printing Techniques") + `
	<div>There are plenty of technologies that drive 3D printing:</div>
	<ul>
		<li>
			<strong>Stereolithography</strong> uses UV light to solidify photopolymer resin to produce precise layers for complex designs.
		</li>
		<li>
			<strong> Fused Deposition Modeling pushes out melted plastic to create layers, like what's used to make LEGO bricks.</strong>
		</li>

	</ul>

	
		`
});

const createHeading = text => `<h1 style='text-align: center'><strong>${text}</strong></h1>`
