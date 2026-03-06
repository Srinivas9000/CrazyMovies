function goSeats() {
  window.location.href = "sampleseat.html"; 
}

// ===== SHOW DATA =====

const showData = {
  "2026-02-08": {
    theatre1: ["11:00 AM", "02:30 PM", "06:00 PM","09:30PM"],
    theatre2: ["10:00 AM", "01:00 PM", "04:00 PM","07:00PM"],
    theatre3: ["09:30 AM", "12:30 PM", "07:00 PM","10:00PM"],
    theatre4: ["11:30 AM", "02:30 PM", "06:00 PM","9:00PM"]
  },

  "2026-02-09": {
    theatre1: ["10:00 AM", "01:00 PM", "05:00 PM"],
    theatre2: ["11:15 AM", "02:45 PM", "08:00 PM"],
    theatre3: ["09:00 AM", "12:00 PM", "06:00 PM"]
  },

  "2026-02-10": {
    theatre1: ["11:30 AM", "03:00 PM", "07:30 PM"],
    theatre2: ["10:00 AM", "01:30 PM", "05:30 PM"],
    theatre3: ["09:45 AM", "12:45 PM", "06:45 PM"]
  },
  "2026-02-11": {
    theatre1: ["09:30 AM", "12:00 PM", "08:30 PM"],
    theatre2: ["12:00 PM", "03:30 PM", "08:30 PM"],
    theatre3: ["09:45 PM", "12:45 PM", "09:45 PM"]
  },
  "2026-02-12": {
    theatre1: ["07:30 AM", "10:00 PM", "01:30 PM"],
    theatre2: ["09:00 PM", "12:30 PM", "03:30 PM"],
    theatre3: ["09:45 PM", "12:45 PM", "09:45 PM"]
  },
  "2026-02-13": {
    theatre1: ["10:30 AM", "01:00 PM", "09:30 PM"],
    theatre2: ["12:00 PM", "03:30 PM", "08:30 PM"],
    theatre3: ["09:45 PM", "12:45 PM", "09:45 PM"]
  },
  "2026-02-14": {
    theatre1: ["09:30 AM", "12:00 PM", "08:30 PM"],
    theatre2: ["12:00 PM", "03:30 PM", "08:30 PM"],
    theatre3: ["09:45 PM", "12:45 PM", "09:45 PM"]
  },
  "2026-02-15": {
    theatre1: ["07:30 AM", "08:00 AM", "03:30 PM"],
    theatre2: ["09:00 AM", "12:30 PM", "09:30 PM"],
    theatre3: ["09:45 PM", "12:45 PM", "09:45 PM"]
  },
  "2026-02-16": {
    theatre1: ["06:30 AM", "12:00 PM", "08:30 PM"],
    theatre2: ["01:00 PM", "03:30 PM", "08:30 PM"],
    theatre3: ["09:45 PM", "12:45 PM", "09:45 PM"]
  },
};


// ===== FUNCTION =====

function loadShows(date, element) {

  // remove active from all dates
  document.querySelectorAll(".date").forEach(d => {
    d.classList.remove("active");
  });

  // add active to clicked date
  element.classList.add("active");

  // change timings
  for (let theatre in showData[date]) {

    const container = document.getElementById(theatre);
    container.innerHTML = "";

    showData[date][theatre].forEach(time => {

      const btn = document.createElement("button");
      btn.innerText = time;
      btn.onclick = () => goSeats();

      container.appendChild(btn);

    });
  }
}

function createTimeButton(time) {
  const btn = document.createElement("button");
  btn.innerText = time;
  btn.classList.add("time-btn");

  btn.onclick = () => {
    // optional: save selected show time
    localStorage.setItem("selectedTime", time);

    // redirect to seat selection page
    window.location.href = "sampleseat.html";
  };

  return btn;
}


// ===== DEFAULT LOAD =====

loadShows("2026-02-08", document.querySelector(".date"));

