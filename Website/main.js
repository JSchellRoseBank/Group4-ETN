// Six-month Courses
const sixMonthCourses = [
	{
		name: "First Aid",
		fees: 1500,
		purpose: "To provide first aid awareness and basic life support.",
		content: [
			"Wounds and bleeding",
			"Burns and fractures",
			"Emergency scene management",
			"Cardio-Pulmonary Resuscitation (CPR)",
			"Respiratory distress e.g., Choking, blocked airway",
		],
	},
	{
		name: "Sewing",
		fees: 1500,
		purpose: "To provide alterations and new garment tailoring services",
		content: [
			"Types of stitches",
			"Threading a sewing machine",
			"Sewing buttons, zips, hems and seams",
			"Alterations",
			"Designing and sewing new garments",
		],
	},
	{
		name: "Landscaping",
		fees: 1500,
		purpose:
			"To provide landscaping services for new and established gardens",
		content: [
			"Indigenous and exotic plants and trees",
			"Fixed structures (fountains, statues, benches, tables, built-in braai)",
			"Balancing of plants and trees in a garden",
			"Aesthetics of plant shapes and colours",
			"Garden layout",
		],
	},
	{
		name: "Life Skills",
		fees: 1500,
		purpose: "To provide skills to navigate basic life necessities",
		content: [
			"Opening a bank account",
			"Basic labour law (know your rights)",
			"Basic reading and writing literacy",
			"Basic numeric literacy",
		],
	},
];

// Six-week Courses
const sixWeekCourses = [
	{
		name: "Child Minding",
		fees: 750,
		purpose: "To provide basic child and baby care",
		content: [
			"birth to six-month old baby needs",
			"seven-month to one year old needs",
			"Toddler needs",
			"Educational toys",
		],
	},
	{
		name: "Cooking",
		fees: 750,
		purpose: "To prepare and cook nutritious family meals",
		content: [
			"Nutritional requirements for a healthy body",
			"Types of protein, carbohydrates and vegetables",
			"Planning meals",
			"Tasty and nutritious recipes",
			"Preparation and cooking of meals",
		],
	},
	{
		name: "Garden Maintenance",
		fees: 750,
		purpose:
			"To provide basic knowledge of watering, pruning and planting in a domestic garden.",
		content: [
			"Water restrictions and the watering requirements of indigenous and exotic plants",
			"Pruning and propagation of plants",
			"Planting techniques for different plant types",
		],
	},
];

// Render courses function
function renderCourses(courses, containerId) {
	const container = document.getElementById(containerId);
	container.innerHTML = courses
		.map((course) => {
			const contentList = course.content
				.map((item) => `<li>${item}</li>`)
				.join("");
			return `
        <div class="course-card">
          <h4>${course.name}</h4>
          <p>Fee R${course.fees}</p>
          <div class="details-text">Details</div>
          <div class="arrow">&#x2193;</div>
          <div class="extra-content">
            <strong>Purpose:</strong> ${course.purpose}
            <ul>${contentList}</ul>
          </div>
        </div>
      `;
		})
		.join("");

	// Click to expand/collapse
	const cards = container.querySelectorAll(".course-card");
	cards.forEach((card) => {
		card.addEventListener("click", () => {
			card.classList.toggle("active");
		});
	});
}

// Render both arrays
renderCourses(sixMonthCourses, "sixMonthCourses");
renderCourses(sixWeekCourses, "sixWeekCourses");

// Populate custom dropdown menu
function populateCustomDropdown() {
	const dropdownMenu = document.getElementById("dropdownMenu");

	// Clear existing options
	dropdownMenu.innerHTML = "";

	// Add six-month courses
	sixMonthCourses.forEach((course) => {
		const option = document.createElement("div");
		option.className = "dropdown-option";
		option.innerHTML = `
			<input type="checkbox" id="course-${course.name.replace(/\s+/g, "-")}" value="${
			course.name
		}" />
			<label for="course-${course.name.replace(/\s+/g, "-")}">${
			course.name
		} (6 months) - R${course.fees}</label>
		`;
		dropdownMenu.appendChild(option);
	});

	// Add six-week courses
	sixWeekCourses.forEach((course) => {
		const option = document.createElement("div");
		option.className = "dropdown-option";
		option.innerHTML = `
			<input type="checkbox" id="course-${course.name.replace(/\s+/g, "-")}" value="${
			course.name
		}" />
			<label for="course-${course.name.replace(/\s+/g, "-")}">${
			course.name
		} (6 weeks) - R${course.fees}</label>
		`;
		dropdownMenu.appendChild(option);
	});
}

// Call the function when the page loads
populateCustomDropdown();

// Handle custom dropdown functionality
function handleCustomDropdown() {
	const dropdownButton = document.getElementById("dropdownButton");
	const dropdownMenu = document.getElementById("dropdownMenu");
	const dropdownText = dropdownButton.querySelector(".dropdown-text");
	const selectedCoursesContainer = document.getElementById("selectedCourses");

	let selectedCourses = [];

	// Toggle dropdown
	dropdownButton.addEventListener("click", function (e) {
		e.preventDefault();
		dropdownButton.classList.toggle("active");
		dropdownMenu.classList.toggle("show");
	});

	// Handle checkbox changes
	dropdownMenu.addEventListener("change", function (e) {
		if (e.target.type === "checkbox") {
			const courseName = e.target.value;
			const isChecked = e.target.checked;

			if (isChecked) {
				selectedCourses.push(courseName);
			} else {
				selectedCourses = selectedCourses.filter(
					(course) => course !== courseName
				);
			}

			updateSelectedCoursesDisplay();
			updateButtonText();
		}
	});

	// Close dropdown when clicking outside
	document.addEventListener("click", function (e) {
		if (
			!dropdownButton.contains(e.target) &&
			!dropdownMenu.contains(e.target)
		) {
			dropdownButton.classList.remove("active");
			dropdownMenu.classList.remove("show");
		}
	});

	// Update button text
	function updateButtonText() {
		if (selectedCourses.length === 0) {
			dropdownText.textContent = "Pick Courses";
		} else if (selectedCourses.length === 1) {
			dropdownText.textContent = selectedCourses[0];
		} else {
			dropdownText.textContent = `${selectedCourses.length} courses selected`;
		}
	}

	// Update selected courses display
	function updateSelectedCoursesDisplay() {
		selectedCoursesContainer.innerHTML = "";

		selectedCourses.forEach((courseName) => {
			const courseTag = document.createElement("div");
			courseTag.className = "selected-course";
			courseTag.innerHTML = `
				<span>${courseName}</span>
				<button type="button" class="remove-course" data-course="${courseName}">×</button>
			`;

			// Add remove functionality
			const removeBtn = courseTag.querySelector(".remove-course");
			removeBtn.addEventListener("click", function () {
				// Remove from selected courses
				selectedCourses = selectedCourses.filter(
					(course) => course !== courseName
				);

				// Uncheck the checkbox
				const checkbox = document.querySelector(
					`input[value="${courseName}"]`
				);
				if (checkbox) {
					checkbox.checked = false;
				}

				// Update displays
				updateSelectedCoursesDisplay();
				updateButtonText();
			});

			selectedCoursesContainer.appendChild(courseTag);
		});
	}

	// Get selected courses for form submission
	window.getSelectedCourses = function () {
		return selectedCourses;
	};

	// Function to reset selected courses (called from resetQuoteModal)
	window.resetSelectedCourses = function () {
		selectedCourses = [];
		updateSelectedCoursesDisplay();
		updateButtonText();
	};
}

// Handle quote form submission
function handleQuoteSubmission() {
	const quoteForm = document.getElementById("quoteForm");

	quoteForm.addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent default form submission

		// Get form data
		const fullName = document.getElementById("fullName").value.trim();
		const phoneNumber = document.getElementById("phoneNumber").value.trim();
		const email = document.getElementById("email").value.trim();

		// Get selected courses
		const selectedCourses = window.getSelectedCourses
			? window.getSelectedCourses()
			: [];

		// Validate form fields
		let isValid = true;
		let errorMessage = "";

		// Validate full name
		if (!fullName || fullName.length < 2) {
			isValid = false;
			errorMessage =
				"Please enter your full name (at least 2 characters).";
		}

		// Validate phone number
		else if (!phoneNumber || phoneNumber.length < 10) {
			isValid = false;
			errorMessage =
				"Please enter a valid phone number (at least 10 digits).";
		}

		// Validate email
		else if (!email || !/\S+@\S+\.\S+/.test(email)) {
			isValid = false;
			errorMessage = "Please enter a valid email address.";
		}

		// Validate courses selection
		else if (!selectedCourses || selectedCourses.length === 0) {
			isValid = false;
			errorMessage = "Please select at least one course.";
		}

		// If validation fails, show error and return
		if (!isValid) {
			alert(errorMessage);
			return;
		}

		// Create quote object
		const quoteData = {
			fullName: fullName,
			phoneNumber: phoneNumber,
			email: email,
			courses: selectedCourses,
			submissionDate: new Date().toISOString(),
		};

		// Log the quote data (in a real app, this would be sent to a server)
		console.log("Quote Request:", quoteData);

		// Show quote preview modal
		showQuotePreview(fullName, phoneNumber, email, selectedCourses);

		// Reset form
		quoteForm.reset();
		// Clear selected courses display
		document.getElementById("selectedCourses").innerHTML = "";
		// Reset dropdown button text
		document.querySelector(".dropdown-text").textContent = "Pick Courses";
		// Uncheck all checkboxes
		document
			.querySelectorAll("#dropdownMenu input[type='checkbox']")
			.forEach((checkbox) => {
				checkbox.checked = false;
			});
	});
}

// Show quote preview modal
function showQuotePreview(fullName, phoneNumber, email, selectedCourses) {
	const modal = document.getElementById("quoteModal");

	// Populate customer information
	document.getElementById("previewName").textContent = fullName;
	document.getElementById("previewPhone").textContent = phoneNumber;
	document.getElementById("previewEmail").textContent = email;

	// Populate selected courses
	const previewCourses = document.getElementById("previewCourses");
	previewCourses.innerHTML = "";

	let totalPrice = 0;
	let courseDetails = [];

	// Get course details and calculate totals
	selectedCourses.forEach((courseName) => {
		// Find course in both arrays
		let course =
			sixMonthCourses.find((c) => c.name === courseName) ||
			sixWeekCourses.find((c) => c.name === courseName);

		if (course) {
			courseDetails.push(course);
			totalPrice += course.fees;

			const courseItem = document.createElement("div");
			courseItem.className = "course-preview-item";
			courseItem.innerHTML = `
				<span class="course-name">${course.name}</span>
				<span class="course-price">R${course.fees}</span>
			`;
			previewCourses.appendChild(courseItem);
		}
	});

	// Calculate discount
	let discount = 0;
	let discountText = "No discount";

	if (selectedCourses.length >= 4) {
		discount = totalPrice * 0.15;
		discountText = "15% discount (4+ courses)";
	} else if (selectedCourses.length === 3) {
		discount = totalPrice * 0.1;
		discountText = "10% discount (3 courses)";
	} else if (selectedCourses.length === 2) {
		discount = totalPrice * 0.05;
		discountText = "5% discount (2 courses)";
	}

	const subtotalAfterDiscount = totalPrice - discount;
	const vatAmount = subtotalAfterDiscount * 0.15;
	const finalPrice = subtotalAfterDiscount + vatAmount;

	// Populate quote summary
	const previewSummary = document.getElementById("previewSummary");
	previewSummary.innerHTML = `
		<div class="quote-totals">
			<div class="total-line">
				<span>Subtotal:</span>
				<span>R${totalPrice.toFixed(2)}</span>
			</div>
			${
				discount > 0
					? `
			<div class="total-line">
				<span>Discount (${discountText}):</span>
				<span>-R${discount.toFixed(2)}</span>
			</div>
			`
					: ""
			}
			<div class="total-line">
				<span>Subtotal after discount:</span>
				<span>R${subtotalAfterDiscount.toFixed(2)}</span>
			</div>
			<div class="total-line">
				<span>VAT (15%):</span>
				<span>R${vatAmount.toFixed(2)}</span>
			</div>
			<div class="total-line final">
				<span>Total (incl. VAT):</span>
				<span>R${finalPrice.toFixed(2)}</span>
			</div>
		</div>
	`;

	// Show modal
	modal.style.display = "block";
	// Prevent background scrolling
	document.body.style.overflow = "hidden";
}

// Function to reset quote modal and form
function resetQuoteModal() {
	// Clear modal preview fields
	document.getElementById("previewName").textContent = "";
	document.getElementById("previewPhone").textContent = "";
	document.getElementById("previewEmail").textContent = "";
	document.getElementById("previewCourses").innerHTML = "";
	document.getElementById("previewSummary").innerHTML = "";

	// Reset form if it exists
	const quoteForm = document.getElementById("quoteForm");
	if (quoteForm) {
		quoteForm.reset();
	}

	// Clear selected courses display
	document.getElementById("selectedCourses").innerHTML = "";

	// Reset dropdown button text
	const dropdownText = document.querySelector(".dropdown-text");
	if (dropdownText) {
		dropdownText.textContent = "Pick Courses";
	}

	// Uncheck all checkboxes
	document
		.querySelectorAll("#dropdownMenu input[type='checkbox']")
		.forEach((checkbox) => {
			checkbox.checked = false;
		});

	// Reset the internal selectedCourses array in the dropdown handler
	if (window.resetSelectedCourses) {
		window.resetSelectedCourses();
	}
}

// Handle modal interactions
function handleModal() {
	const modal = document.getElementById("quoteModal");
	const closeBtn = document.querySelector(".close");
	const cancelBtn = document.getElementById("cancelQuote");
	const confirmBtn = document.getElementById("confirmQuote");

	// Close modal functions
	function closeModal() {
		modal.style.display = "none";
		// Restore background scrolling
		document.body.style.overflow = "auto";
		// Reset quote calculation values
		resetQuoteModal();
	}

	// Event listeners
	closeBtn.addEventListener("click", closeModal);
	cancelBtn.addEventListener("click", closeModal);
	confirmBtn.addEventListener("click", async function () {
		// Get quote data for email
		const fullName = document.getElementById("previewName").textContent;
		const phoneNumber = document.getElementById("previewPhone").textContent;
		const email = document.getElementById("previewEmail").textContent;
		const previewCourses = document.getElementById("previewCourses");
		const courses = Array.from(
			previewCourses.querySelectorAll(".course-name")
		).map((el) => el.textContent);

		// Build email body
		let emailBody = `Quote Request Details:\n\n`;
		emailBody += `Customer Information:\n`;
		emailBody += `Name: ${fullName}\n`;
		emailBody += `Phone: ${phoneNumber}\n`;
		emailBody += `Email: ${email}\n\n`;
		emailBody += `Selected Courses:\n`;
		courses.forEach((course, index) => {
			emailBody += `${index + 1}. ${course}\n`;
		});
		emailBody += `\n\nQuote Summary:\n`;
		const summary = document.querySelector(".quote-totals");
		if (summary) {
			emailBody += summary.textContent.replace(/\s+/g, " ");
		}

		try {
			// Initialize EmailJS
			emailjs.init("DEvGTZs1YmRkiuCJV");

			// Prepare email template parameters
			const templateParams = {
				to_email: "st10486426@rcconnect.edu.za",
				subject: `Quote Request from ${fullName}`,
				message: emailBody,
				customer_name: fullName,
				customer_email: email,
				customer_phone: phoneNumber,
				courses: courses.join(", "),
			};

			// Send email using EmailJS
			const response = await emailjs.send(
				"service_1ponfje",
				"template_4dxyhbm",
				templateParams
			);

			console.log("Email sent successfully:", response);

			// Show success message
			alert(
				"Quote request submitted successfully! We'll contact you soon with your quote."
			);

			// Reset after successful email send
			resetQuoteModal();
			closeModal();
		} catch (error) {
			console.error("Error sending email:", error);
			alert(
				"Sorry, there was an error submitting your quote request. Please try again or contact us directly."
			);
		}
	});

	// Close modal when clicking outside
	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			closeModal();
		}
	});
}

// Burger menu functionality
function handleBurgerMenu() {
	const burgerMenu = document.getElementById("burgerMenu");
	const navMenu = document.getElementById("navMenu");

	// Toggle menu on burger click
	burgerMenu.addEventListener("click", function () {
		burgerMenu.classList.toggle("active");
		navMenu.classList.toggle("active");
	});

	// Close menu when clicking a nav link
	const navLinks = navMenu.querySelectorAll("a");
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			burgerMenu.classList.remove("active");
			navMenu.classList.remove("active");
		});
	});

	// Close menu when clicking outside
	document.addEventListener("click", function (e) {
		if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
			burgerMenu.classList.remove("active");
			navMenu.classList.remove("active");
		}
	});
}

// Initialize form handling when page loads
document.addEventListener("DOMContentLoaded", function () {
	handleQuoteSubmission();
	handleCustomDropdown();
	handleModal();
	handleBurgerMenu();
});

// Smooth scrolling functionality for navigation links
document.addEventListener("DOMContentLoaded", function () {
	// Get all navigation links
	const navLinks = document.querySelectorAll('.nav a[href^="#"]');

	// Add click event listeners to each nav link
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault(); // Prevent default anchor behavior

			// Get the target section ID
			const targetId = this.getAttribute("href").substring(1);
			const targetSection = document.getElementById(targetId);

			if (targetSection) {
				// Get the header height (80px as defined in CSS)
				const headerHeight = 80;

				// Calculate the position to scroll to (accounting for fixed header)
				const targetPosition = targetSection.offsetTop - headerHeight;

				// Smooth scroll to the target position
				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});

	// Also handle smooth scrolling for buttons in hero section
	const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
	heroButtons.forEach((button) => {
		button.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href").substring(1);
			const targetSection = document.getElementById(targetId);

			if (targetSection) {
				const headerHeight = 80;
				const targetPosition = targetSection.offsetTop - headerHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});
});
