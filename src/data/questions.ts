export type QuestionType = 'single' | 'multiple';

export interface Question {
  id: number;
  week: number;
  question: string;
  options: string[];
  correctAnswer: string[];
  type: QuestionType;
}

export const questions: Question[] = [
  {
    id: 1,
    week: 1,
    question: "An attacker calls an employee, claims to be from the IT helpdesk, and convinces them to reveal their login credentials. Which technique is being used?",
    options: ["Session Hijacking", "Social Engineering", "Brute Force Attack", "SQL Injection"],
    correctAnswer: ["Social Engineering"],
    type: "single"
  },
  {
    id: 2,
    week: 1,
    question: "An attacker uses a commercially available penetration testing toolkit to probe and exploit vulnerabilities in a target network. In this context, the toolkit represents technology functioning as:",
    options: ["A compliance monitoring tool", "A business continuity asset", "A safeguard against external threats", "A source of threat"],
    correctAnswer: ["A source of threat"],
    type: "single"
  },
  {
    id: 3,
    week: 1,
    question: "A threat actor sends a carefully researched email to a senior finance executive, referencing their recent business trip and impersonating their CEO. Which attack type does this describe?",
    options: ["Spear-phishing", "Vishing", "General phishing", "Smishing"],
    correctAnswer: ["Spear-phishing"],
    type: "single"
  },
  {
    id: 4,
    week: 1,
    question: "A victim attempts to open their files after a malware infection but finds every document locked behind an unknown cipher. The attacker then demands payment for the decryption key. Which malware category best explains this behavior?",
    options: ["Spyware", "Rootkit", "Adware", "Ransomware"],
    correctAnswer: ["Ransomware"],
    type: "single"
  },
  {
    id: 5,
    week: 1,
    question: "A national government wants to safeguard systems that, if disrupted, could destabilize essential public services. Which of the following system types would be the highest priority under Critical Infrastructure Protection (CIP)?",
    options: ["Consumer mobile apps and entertainment platforms", "University learning management systems", "SCADA systems managing water treatment and power distribution", "Home automation devices"],
    correctAnswer: ["SCADA systems managing water treatment and power distribution"],
    type: "single"
  },
  {
    id: 6,
    week: 1,
    question: "Deploying a firewall alone is sufficient to constitute a complete Information Security program for an organization.",
    options: ["True", "False"],
    correctAnswer: ["False"],
    type: "single"
  },
  {
    id: 7,
    week: 1,
    question: "A security manager wants to ensure that sensitive organizational data cannot be accessed by unauthorized individuals. Which combination of measures best achieves this?",
    options: ["Information classification, secure storage, and enforced access policies", "Open access for all staff to improve collaboration efficiency", "Faster network speeds and upgraded hardware", "Regular system reboots and software updates only"],
    correctAnswer: ["Information classification, secure storage, and enforced access policies"],
    type: "single"
  },
  {
    id: 8,
    week: 1,
    question: "A hospital receptionist verbally shares a patient's diagnosis and full name with a visitor who claims to be a relative but has no verified authorization. Which category of violation does this represent?",
    options: ["A breach of general data privacy with no specific regulatory consequence", "An acceptable disclosure under standard hospital protocols", "A network security incident requiring IT intervention", "A breach involving Protected Health Information (PHI)"],
    correctAnswer: ["A breach involving Protected Health Information (PHI)"],
    type: "single"
  },
  {
    id: 9,
    week: 1,
    question: "During an audit, a database record is found to have been silently modified by an unauthorized party. Which information security property has been violated?",
    options: ["Availability", "Integrity", "Authenticity", "Confidentiality"],
    correctAnswer: ["Integrity"],
    type: "single"
  },
  {
    id: 10,
    week: 1,
    question: "An organization rolls out a data classification scheme, runs employee awareness sessions, and deploys endpoint security tools. Collectively, these efforts are best described as implementing:",
    options: ["Information Security", "Operations Security", "Network Security", "Physical Security"],
    correctAnswer: ["Information Security"],
    type: "single"
  },
  {
    id: 11,
    week: 2,
    question: "The attribute that describes whether information is genuine and original rather than reproduced or fabricated is called Authenticity, not Accuracy.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 12,
    week: 2,
    question: "A new IT manager wants to tighten access controls without disrupting productivity. Which of the following practices should they implement? (Select all that apply.)",
    options: ["Providing all staff with administrator-level access to avoid bottlenecks", "Maintaining and auditing access logs to detect anomalies", "Periodically reviewing and revoking unnecessary user access rights", "Assigning permissions based on each employee's role and responsibilities"],
    correctAnswer: ["Maintaining and auditing access logs to detect anomalies", "Periodically reviewing and revoking unnecessary user access rights", "Assigning permissions based on each employee's role and responsibilities"],
    type: "multiple"
  },
  {
    id: 13,
    week: 2,
    question: "A CISO needs a structured model to assess whether their organization's security program adequately covers the goals, data states, and control types relevant to protecting information. Which model was specifically designed for this purpose?",
    options: ["OSI Model", "CIA Triad", "STRIDE Model", "McCumber Cube"],
    correctAnswer: ["McCumber Cube"],
    type: "single"
  },
  {
    id: 14,
    week: 2,
    question: "A developer ships a web application with an unvalidated input field that allows attackers to inject SQL commands. Before any attack occurs, this unvalidated field is best described as:",
    options: ["A vulnerability", "A threat", "An exploit", "An attack vector in active use"],
    correctAnswer: ["A vulnerability"],
    type: "single"
  },
  {
    id: 15,
    week: 2,
    question: "When malware slips through a detection system unidentified and causes damage, this is an example of a False Negative.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 16,
    week: 2,
    question: "A security analyst maps their controls across three axes: security goals, data states, and control types. Which framework are they applying, and which dimension addresses how data exists at any given moment?",
    options: ["CIA Triad; the first dimension", "NIST CSF; the third dimension", "McCumber Cube; the second dimension", "COBIT; the second dimension"],
    correctAnswer: ["McCumber Cube; the second dimension"],
    type: "single"
  },
  {
    id: 17,
    week: 2,
    question: "A security tool quarantines a trusted internal application used daily by the finance team, flagging it as malware. Operations come to a halt. How is this detection outcome classified?",
    options: ["True Positive – the threat was correctly identified", "False Positive – a safe file was incorrectly flagged as malicious", "True Negative – a safe file was correctly cleared", "False Negative – a real threat was missed by the system"],
    correctAnswer: ["False Positive – a safe file was incorrectly flagged as malicious"],
    type: "single"
  },
  {
    id: 18,
    week: 2,
    question: "A server sends data packets to a workstation across an office. Which component of the information system made this transfer possible?",
    options: ["The server's hardware processor", "The network infrastructure", "The operating system software", "The stored data files"],
    correctAnswer: ["The network infrastructure"],
    type: "single"
  },
  {
    id: 19,
    week: 2,
    question: "An employee receives an email from 'support@microsoft.com' asking them to click a link and reset their password. What is the most appropriate immediate response?",
    options: ["Open the attachment to verify the content before deciding", "Forward it to colleagues to check if they received the same email", "Click the link since the sender mentions Microsoft", "Verify the sender's legitimacy independently and avoid clicking any links"],
    correctAnswer: ["Verify the sender's legitimacy independently and avoid clicking any links"],
    type: "single"
  },
  {
    id: 20,
    week: 2,
    question: "An attacker crafts a SQL injection string that takes advantage of an unvalidated input field to dump an entire customer database. The crafted string itself is best described as:",
    options: ["A vulnerability", "An exploit", "A threat agent", "A security patch"],
    correctAnswer: ["An exploit"],
    type: "single"
  },
  {
    id: 21,
    week: 3,
    question: "Which of the following are the goals of information security governance?\n\ni. Strategic alignment of information security with business objectives to ensure organizational goals are effectively supported.\n\nii. Risk management through the implementation of suitable controls and measures to identify, manage, and mitigate risks to information assets.\n\niii. Resource management by optimizing the utilization of information security expertise, technologies, and infrastructure in an efficient and effective manner.\n\niv. Performance measurement by evaluating, monitoring, and reporting information security governance metrics to verify that organizational objectives are being achieved.",
    options: ["Only i and ii are correct", "Only i, ii, and iv are correct", "Only i, ii, and iii are correct", "i, ii, iii, and iv are correct"],
    correctAnswer: ["i, ii, iii, and iv are correct"],
    type: "single"
  },
  {
    id: 22,
    week: 3,
    question: "Which of the following statements is not correct?",
    options: ["COBIT is a framework to organize business processes.", "COBIT defines the design factors the enterprise should consider when building a best-fit governance system.", "COBIT is not a comprehensive description of an enterprise's IT environment.", "COBIT defines the components to build and sustain a governance system: processes, organizational structures, policies and procedures, information flows, culture and behaviors, skills, and infrastructure."],
    correctAnswer: ["COBIT is a framework to organize business processes."],
    type: "single"
  },
  {
    id: 23,
    week: 3,
    question: "Match the following:\n\nI. De facto standard\nII. De jure standard\nIII. Guidelines\nIV. Practices\n\na. A standard that has been formally evaluated, approved, and ratified by a formal standards organization.\nb. Examples of actions that illustrate compliance with policies.\nc. A standard that has been widely adopted or accepted by a public group rather than a formal standards organization.\nd. Nonmandatory recommendations the employee may use as a reference in complying with a policy.",
    options: ["i-a, ii-c, iii-b, iv-d", "i-c, ii-a, iii-b, iv-d", "i-c, ii-a, iii-d, iv-b", "i-b, ii-c, iii-d, iv-a"],
    correctAnswer: ["i-c, ii-a, iii-d, iv-b"],
    type: "single"
  },
  {
    id: 24,
    week: 3,
    question: "COSO's ERM framework emphasizes:",
    options: ["Operational efficiency", "Risk identification and assessment", "Regulatory compliance", "Human resource management"],
    correctAnswer: ["Risk identification and assessment"],
    type: "single"
  },
  {
    id: 25,
    week: 3,
    question: "Which of the following is NOT a fundamental component of the NIST Cybersecurity Framework?",
    options: ["The Framework profile", "The Framework tiers", "The Framework core", "The Framework control"],
    correctAnswer: ["The Framework control"],
    type: "single"
  },
  {
    id: 26,
    week: 3,
    question: "An organization adopts a Governance, Risk, and Compliance (GRC) framework. What benefits can it expect to achieve?",
    options: ["Improved accountability and responsible operations", "Better decisions based on data and insights", "Stronger cybersecurity management", "All of the above"],
    correctAnswer: ["All of the above"],
    type: "single"
  },
  {
    id: 27,
    week: 3,
    question: "Which of the following is not true?",
    options: ["ISO/IEC 27001 is suitable only for large organizations in the information technology sector and is not relevant to small or medium-sized businesses.", "Conformity with ISO/IEC 27001 indicates that an organization has established a systematic approach to managing risks associated with the security of the information it owns or processes, and that this approach adheres to the best practices and principles specified in the International Standard.", "ISO/IEC 27001 enables organizations to develop a risk-aware culture by proactively identifying, assessing, and addressing information security vulnerabilities and weaknesses.", "ISO/IEC 27001 promotes a comprehensive approach to information security by addressing people, processes, policies, and technology to safeguard organizational information assets."],
    correctAnswer: ["ISO/IEC 27001 is suitable only for large organizations in the information technology sector and is not relevant to small or medium-sized businesses."],
    type: "single"
  },
  {
    id: 28,
    week: 3,
    question: "Which of the following is not a component of COSO?",
    options: ["Control Activities", "Monitoring", "Risk Response", "Risk Assessment"],
    correctAnswer: ["Risk Response"],
    type: "single"
  },
  {
    id: 29,
    week: 3,
    question: "Information security governance is the application of the principles of corporate governance to the information security function.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 30,
    week: 3,
    question: "ISO standards, such as ________ for risk management or ________ for information security, provide global best practices for compliance and risk management.",
    options: ["ISO 31000, ISO 27001", "ISO 27001, ISO 31000", "ISO 27001, ISO 17799", "ISO 17799, ISO 27001"],
    correctAnswer: ["ISO 31000, ISO 27001"],
    type: "single"
  },
  {
    id: 31,
    week: 4,
    question: "A ________ is prepared by the organization to anticipate, react to, and recover from events that threaten the security of information and information assets in the organization.",
    options: ["Disaster Recovery Plan", "Incident Response Plan", "Contingency Plan", "Business Continuity Plan"],
    correctAnswer: ["Contingency Plan"],
    type: "single"
  },
  {
    id: 32,
    week: 4,
    question: "Business Resumption Planning (BRP) consists of the actions taken by senior management to develop and implement a combined ________ and ________, and set of recovery teams.",
    options: ["Disaster Recovery Plan, Business Continuity Plan", "Incident Response Plan, Business Continuity Plan", "Contingency Plan, Disaster Recovery Plan", "Disaster Recovery Plan, Incident Response Plan"],
    correctAnswer: ["Disaster Recovery Plan, Business Continuity Plan"],
    type: "single"
  },
  {
    id: 33,
    week: 4,
    question: "Which of the following statements is not true?",
    options: ["Tactical planning focuses on short-term undertakings that will be completed within one or two years.", "An operational plan outlines the required tasks for all relevant departments, along with communication and reporting requirements, which may include weekly meetings, progress reports, and other related activities.", "Strategic planning sets the long-term direction to be taken by the organization and each of its component parts.", "Operational plans are used to create tactical plans, which in turn are used to develop strategic plans."],
    correctAnswer: ["Operational plans are used to create tactical plans, which in turn are used to develop strategic plans."],
    type: "single"
  },
  {
    id: 34,
    week: 4,
    question: "True or False:\n\nIncident response planning comprises four phases: incident planning, incident detection, incident reaction, and incident recovery.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 35,
    week: 4,
    question: "Which of the following statements are true?\n\nI. Business Impact Analysis (BIA) is an investigation and assessment of the various adverse events that can affect the organization, conducted as a preliminary phase of the contingency planning process, which includes a determination of how critical a system or set of information is to the organization's core processes and recovery priorities.\n\nII. After the contingency planning (CP) policy is developed, the next step in the CP process is conducting a business impact analysis.\n\nIII. Business Impact Analysis is a preparatory activity common to both contingency planning (CP) and risk management that helps identify the business functions and information systems most critical to an organization's success.\n\nIV. The initial phase of the Business Impact Analysis (BIA) involves evaluating and prioritizing business processes within the organization according to their contribution to the organization's mission.",
    options: ["Only I and IV are true", "Only I, II and III are true", "Only II, III and IV are true", "I, II, III and IV are true"],
    correctAnswer: ["I, II, III and IV are true"],
    type: "single"
  },
  {
    id: 36,
    week: 4,
    question: "The total amount of time the system owner or authorizing official is willing to accept for a business process outage or disruption, including all impact considerations, is known as:",
    options: ["Work Recovery Time", "Maximum Tolerable Downtime", "Maximum Recovery Time", "Recovery Point Objective"],
    correctAnswer: ["Maximum Tolerable Downtime"],
    type: "single"
  },
  {
    id: 37,
    week: 4,
    question: "Which of the following statements is not true?",
    options: ["The incident response plan (IR plan) focuses on immediate response, but if the attack escalates or is disastrous (for example, a fire, flood, earthquake, or total blackout), the process moves on to disaster recovery and the BC plan.", "The disaster recovery plan (DR plan) typically focuses on restoring systems at the original site after disasters occur, and so is closely associated with the BC plan.", "The business continuity plan (BC plan) occurs only when DR plan fails and requires more than simple restoration of information and information resources.", "The BC plan establishes critical business functions at an alternate site."],
    correctAnswer: ["The business continuity plan (BC plan) occurs only when DR plan fails and requires more than simple restoration of information and information resources."],
    type: "single"
  },
  {
    id: 38,
    week: 4,
    question: "Which of the following events are Definite indicators of incidents?",
    options: ["Use of dormant accounts, Changes to logs, Presence of hacker tools, Notifications by partner or peer", "Activities at unexpected times, Notifications by partner or peers, Unusual system crashes, Presence or execution of unknown programs or processes.", "Notification from IDPS, Presence of new accounts, Unusual system crashes, Use of dormant accounts", "Unusual consumption of computing resources, Changes to logs, Unusual system crashes, Presence of unfamiliar files"],
    correctAnswer: ["Use of dormant accounts, Changes to logs, Presence of hacker tools, Notifications by partner or peer"],
    type: "single"
  },
  {
    id: 39,
    week: 4,
    question: "True or False:\n\nIncident classification is the process of examining an incident candidate and determining whether it constitutes an actual incident.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 40,
    week: 4,
    question: "A fully configured computing facility that includes all services, communications links, and physical plant operations, used for BC operations is known as:",
    options: ["Warm site", "Cold Site", "Hot Site", "Service Bureau"],
    correctAnswer: ["Hot Site"],
    type: "single"
  }
];
