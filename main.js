<script>
  async function fetchIPInfo() {
  async function fetchIPInfo() {
    try {
      const res = await fetch("https://ipinfo.io/json?token=demo"); // You can use your own token if you register (free)
      const data = await res.json();

      const ip = data.ip;
      const city = data.city;
      const region = data.region;
      const country = data.country;
      const isp = data.org || "Unknown ISP";

      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();

      document.getElementById("ip-info-bar").innerHTML = `
      <span class="syntax-comment">// Connected from ${ip} (${isp})</span><br>
      <span class="syntax-comment">// Location: ${city}, ${region}, ${country}</span><br>
      <span class="syntax-comment">// Local time: ${time} on ${date}</span>
    `;
    } catch (err) {
      document.getElementById("ip-info-bar").innerHTML = `
      <span class="syntax-comment">// Failed to retrieve IP info</span>
    `;
      console.error("IP fetch failed:", err);
    }
  }

  fetchIPInfo();
</script>
