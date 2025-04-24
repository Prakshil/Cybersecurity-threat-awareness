export const threats = [
  {
    id: "phishing",
    title: "Phishing Attacks",
    icon: "phishing",
    severity: "High",
    shortDescription: "Deceptive attempts to steal sensitive information by impersonating trusted entities.",
    description:
      "Phishing is a cybercrime where attackers disguise themselves as trustworthy entities to trick victims into revealing sensitive information such as passwords, credit card numbers, or personal data. These attacks typically come via email, text message, or fake websites that mimic legitimate ones.",
    examples: [
      "Emails claiming to be from your bank requesting verification of account details",
      "Messages appearing to be from tech support asking for your password",
      "Fake login pages that look identical to legitimate services like Google or PayPal",
    ],
    safetyTips: [
      "Never click on suspicious links in emails or messages",
      "Always verify the sender's email address carefully",
      "Check the URL before entering any login credentials",
      "Enable two-factor authentication on all important accounts",
      "Use a password manager to avoid manually entering credentials on fake sites",
    ],
  },
  {
    id: "malware",
    title: "Malware",
    icon: "malware",
    severity: "Critical",
    shortDescription: "Malicious software designed to damage or gain unauthorized access to computer systems.",
    description:
      "Malware is any software intentionally designed to cause damage to a computer, server, client, or computer network. Types include viruses, worms, trojans, ransomware, spyware, adware, and more. Malware can steal data, encrypt files, monitor activity, or take control of your system.",
    examples: [
      "Ransomware that encrypts your files and demands payment for decryption",
      "Keyloggers that record everything you type, including passwords",
      "Trojans disguised as legitimate software that create backdoors for attackers",
    ],
    safetyTips: [
      "Keep your operating system and all software updated",
      "Use reputable antivirus and anti-malware software",
      "Only download software from official sources",
      "Be cautious when opening email attachments",
      "Regularly backup important data to an offline storage device",
    ],
  },
  {
    id: "password",
    title: "Weak Passwords",
    icon: "password",
    severity: "High",
    shortDescription: "Using simple, common, or reused passwords that are easy to guess or crack.",
    description:
      "Weak passwords are a major security vulnerability. They can be easily guessed, cracked by brute force attacks, or compromised in data breaches. When passwords are reused across multiple sites, a single breach can compromise many of your accounts.",
    examples: [
      "Using common passwords like '123456' or 'password'",
      "Using personal information that's easy to find (birthdays, pet names)",
      "Using the same password for multiple accounts",
    ],
    safetyTips: [
      "Use long, complex passwords with a mix of characters, numbers, and symbols",
      "Use a different password for each account",
      "Consider using a password manager to generate and store strong passwords",
      "Enable two-factor authentication whenever possible",
      "Change passwords regularly, especially for critical accounts",
    ],
  },
  {
    id: "social",
    title: "Social Engineering",
    icon: "social",
    severity: "High",
    shortDescription:
      "Psychological manipulation to trick users into making security mistakes or giving away information.",
    description:
      "Social engineering is the art of manipulating people into performing actions or divulging confidential information. It relies on human error rather than technical hacking techniques, exploiting our natural tendencies to trust and help others.",
    examples: [
      "Pretexting: Creating a fabricated scenario to obtain information",
      "Baiting: Offering something enticing to swap for information",
      "Tailgating: Following someone into a secured area unauthorized",
    ],
    safetyTips: [
      "Verify requests for sensitive information, even from seemingly trusted sources",
      "Be suspicious of unsolicited contacts asking for information",
      "Don't give out personal information unless absolutely necessary",
      "Follow security protocols even when inconvenient",
      "Report suspicious activities to IT security",
    ],
  },
  {
    id: "data",
    title: "Data Breaches",
    icon: "data",
    severity: "Critical",
    shortDescription: "Unauthorized access to data resulting in exposed personal or sensitive information.",
    description:
      "A data breach occurs when protected, sensitive, or confidential data is copied, transmitted, viewed, stolen, or used by an unauthorized individual. These can affect millions of records at once and expose personal information to criminals.",
    examples: [
      "Major company databases being hacked, exposing customer information",
      "Healthcare data breaches revealing medical records",
      "Retail breaches exposing credit card information",
    ],
    safetyTips: [
      "Monitor your accounts for suspicious activity",
      "Use credit monitoring services",
      "Respond quickly to breach notifications",
      "Consider freezing your credit if your financial information is compromised",
      "Change passwords for affected accounts immediately",
    ],
  },
  {
    id: "identity",
    title: "Identity Theft",
    icon: "identity",
    severity: "High",
    shortDescription: "Criminals using your personal information to impersonate you for financial gain.",
    description:
      "Identity theft occurs when someone uses your personal information, such as your name, Social Security number, or credit card number, without your permission, to commit fraud or other crimes. The consequences can be financially devastating and take years to resolve.",
    examples: [
      "Opening new credit accounts in your name",
      "Filing tax returns to collect your refund",
      "Using your health insurance to get medical services",
    ],
    safetyTips: [
      "Regularly check your credit reports",
      "Set up fraud alerts or credit freezes",
      "Secure your personal documents and shred sensitive papers",
      "Be careful about sharing personal information online",
      "Use identity theft protection services",
    ],
  },
  {
    id: "wifi",
    title: "Public WiFi Risks",
    icon: "wifi",
    severity: "Medium",
    shortDescription: "Unsecured networks that allow attackers to intercept data or distribute malware.",
    description:
      "Public WiFi networks are convenient but often lack proper security measures. This makes them hunting grounds for cybercriminals who can intercept data, conduct man-in-the-middle attacks, or distribute malware to connected devices.",
    examples: [
      "Hackers creating rogue hotspots with similar names to legitimate networks",
      "Intercepting unencrypted data sent over public networks",
      "Spreading malware to devices on the same network",
    ],
    safetyTips: [
      "Use a VPN when connecting to public WiFi",
      "Avoid accessing sensitive accounts on public networks",
      "Verify network names before connecting",
      "Keep WiFi turned off when not in use",
      "Use your mobile data connection for sensitive transactions",
    ],
  },
  {
    id: "payment",
    title: "Payment Fraud",
    icon: "payment",
    severity: "High",
    shortDescription: "Unauthorized transactions and financial scams targeting payment methods.",
    description:
      "Payment fraud encompasses various schemes aimed at stealing money through unauthorized transactions, fake payment processors, or compromised payment information. This can happen online or in physical locations with skimming devices.",
    examples: [
      "Credit card skimming at ATMs or gas pumps",
      "Fake online stores collecting payment information",
      "Unauthorized charges after a data breach",
    ],
    safetyTips: [
      "Monitor your accounts regularly for unauthorized transactions",
      "Use credit cards instead of debit cards for better fraud protection",
      "Only shop on secure websites (look for HTTPS)",
      "Consider using virtual credit card numbers for online shopping",
      "Set up transaction alerts for your payment methods",
    ],
  },
]
