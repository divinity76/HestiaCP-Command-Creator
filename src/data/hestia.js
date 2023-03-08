export default [
  {name: " --apache", id: "apache", param: "--apache", desc: " Install Apache.", standard: true, selected: true},
  {name: " --phpfpm", id: "phpfpm", param: "--phpfpm", desc: "Install PHP-FPM.", standard: true, selected: true},
  {name: " --multiphp", id: "multiphp", param: "--multiphp", desc: " Install Multi-PHP.", standard: true, selected: true},
  {name: " --vsftpd", id: "vsftpd", param: "--vsftpd", desc: "Install Vsftpd.", standard: true, selected: true},
  {name: " --proftpd", id: "proftpd", param: "--proftpd", desc: "Install ProFTPD.", standard: false, selected: false},
  {name: " --named", id: "named", param: "--named", desc: "Install Bind.", standard: true, selected: true},
  {name: " --mysql", id: "mysql", param: "--mysql", desc: "Install MariaDB.", standard: true, selected: true},
  {name: " --postgresql", id: "--postgresql", param: "--postgresql", desc: "Install PostgreSQL.", standard: false, selected: false},
  {name: " --exim", id: "--exim", param: "--exim", desc: "Install Exim.", standard: true, selected: true},
  {name: " --dovecot", id: "dovecot", param: "--dovecot", desc: "Install Dovecot.", standard: true, selected: true},
  {name: " --sieve", id: "sieve", param: "--sieve", desc: "Enable Dovecot sieve.", standard: false, selected: false},
  {name: " --clamav", id: "clamav", param: "--clamav", desc: "Install ClamAV.", standard: true, selected: true},
  {name: " --spamassassin", id: "spamassassin", param: "--spamassassin", desc: "Install SpamAssassin.", standard: true, selected: true},
  {name: " --iptables", id: "iptables", param: "--iptables", desc: "Install Iptables.", standard: true, selected: true},
  {name: " --fail2ban", id: "fail2ban", param: "--fail2ban", desc: "Install Fail2ban.", standard: true, selected: true},
  {name: " --quota", id: "quota", param: "--quota", desc: "Filesystem Quota.", standard: false, selected: false},
  {name: " --api", id: "api", param: "--api", desc: "Activate API.", standard: true, selected: true},
  {name: " --force", id: "force", param: "--force", desc: "Force installation.", standard: false, selected: false},
  {name: " --interactive", id: "interactive", param: "--interactive", desc: "Interactive install.", standard: true, selected: true},
  {name: " --port", id: "port", param: "--port", desc: "Change Backend Port default: 8083", standard: true, selected: true, text: '8083', textField: true},
  {name: " --hostname", id: "hostname", param: "--hostname", desc: "Set hostname [text]", standard: false, selected: false, text: '', textField: true},
  {name: " --email", id: "email", param: "--email", desc: "Set admin email [text]", standard: false, selected: false, text: '', textField: true},
  {name: " --password", id: "password", param: "--password", desc: "Set admin password [text]", standard: false, selected: false, text: '', textField: true},
  {name: " --lang", id: "language", param: "--lang", desc: "Default language default: en ( ISO 639-1 codes)", standard: true, selected: true, text: 'en', textField: true},
  {name: "--with-debs", id: "debs", param: "--with-debs", desc: "Path to Hestia packages (Development only)", standard: false, selected: false, text: '', textField: true},
];