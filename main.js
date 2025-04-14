<script>
  window.onload = async function () {
    try {
      const response = await fetch("https://ipinfo.io/json/");
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      const ip = data.ip;
      const city = data.city;
      const region = data.region;
      const country = data.country;
      const isp = data.org || "Unknown ISP";

      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();

      const bar = document.getElementById("ip-info-bar");
      if (bar) {
        bar.innerHTML = `
          <span class="syntax-comment">// Connected from ${ip} (${isp})</span><br>
          <span class="syntax-comment">// Location: ${city}, ${region}, ${country}</span><br>
          <span class="syntax-comment">// Local time: ${time} on ${date}</span>
        `;
      } else {
        console.warn("IP info bar not found in DOM.");
      }

    } catch (err) {
      const bar = document.getElementById("ip-info-bar");
      if (bar) {
        bar.innerHTML = `<span class="syntax-comment">// Failed to retrieve IP info</span>`;
      }
      console.error("Error fetching IP info:", err);
    }
  }
</script>

