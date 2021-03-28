var d = new Date();
var nh = d.getUTCHours();
var nm = d.getUTCMinutes();
var ns = d.getUTCSeconds();

setInterval(() => {
  ns = ns + 6;

  if (ns == 60) {
    ns = 0;
    nm = nm + 1;
  }
  if (nm == 60) {
    nm = 0;
    nh = nh + 1;
  }

  if (nh == 24) {
    nh = 0;
  }

  mp.world.time.hour = nh;
  mp.world.time.minute = nm;
  mp.world.time.second = ns;
  mp.world.time.set();
}, 1000);
