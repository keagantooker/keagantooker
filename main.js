<script>
  async function fetchIPInfo() {
  try {
  const res = await fetch("https://ipinfo.io/json?token=demo");
  const data = await res.json();

  const ip = data.ip;
  const isp = data.org;
  const city = data.city;
  const region = data.region;
  const country = data.country_name;

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
  console.error(err);
}
}

  fetchIPInfo();
</script>
