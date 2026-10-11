export type QuestionType = 'single' | 'multiple';

export interface Question {
  id: number;
  week: number;
  question: string;
  options: string[];
  correctAnswer: string[];
  type: QuestionType;
  imageUrl?: string;
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
  },
  {
    id: 41,
    week: 5,
    question: "Identify the correct statement.",
    options: ["Guidelines are examples of actions that illustrate compliance with policies.", "Procedures are non-mandatory recommendations that employees may use as a reference when complying with a policy.", "Standards are step-by-step instructions that guide employees in following policies and guidelines.", "Practices are examples of actions that illustrate compliance with policies."],
    correctAnswer: ["Practices are examples of actions that illustrate compliance with policies."],
    type: "single"
  },
  {
    id: 42,
    week: 5,
    question: "Which of the following is not a component of Enterprise Information Security Policies (EISP)?",
    options: ["Statement of Purpose", "Need for Information Security", "Authorized access and usage of equipment", "Information Security Responsibilities and Roles"],
    correctAnswer: ["Authorized access and usage of equipment"],
    type: "single"
  },
  {
    id: 43,
    week: 5,
    question: "A policy to be effective and legally enforceable, it should meet which of the criteria?\n(Select all that apply. More than one answer may be possible.)",
    options: ["The organization must be able to demonstrate that the policy has been made readily available for review by the employee.", "The organization must be able to demonstrate that it disseminated the document in an intelligible form.", "The organization must be able to demonstrate that the employee understands the requirements and content of the policy.", "The organization must be able to demonstrate that the employee agrees to comply with the policy through act or affirmation."],
    correctAnswer: ["The organization must be able to demonstrate that the policy has been made readily available for review by the employee.", "The organization must be able to demonstrate that it disseminated the document in an intelligible form.", "The organization must be able to demonstrate that the employee understands the requirements and content of the policy.", "The organization must be able to demonstrate that the employee agrees to comply with the policy through act or affirmation."],
    type: "multiple"
  },
  {
    id: 44,
    week: 5,
    question: "Which of the following approaches are used to create and manage ISSPs within an organization?\n(Select all that apply. More than one answer may be possible.)",
    options: ["Independent ISSP documents, each tailored to a specific issue.", "A single comprehensive ISSP document that covers all issues.", "A modular ISSP document that unifies policy creation and administration while maintaining each specific issue's requirements.", "A hierarchical ISSP structure in which all issue-specific requirements are incorporated directly into the Enterprise Information Security Policy (EISP)."],
    correctAnswer: ["Independent ISSP documents, each tailored to a specific issue.", "A single comprehensive ISSP document that covers all issues.", "A modular ISSP document that unifies policy creation and administration while maintaining each specific issue's requirements."],
    type: "multiple"
  },
  {
    id: 45,
    week: 5,
    question: "Which of the following statements is not true?",
    options: ["SysSPs (systems-specific security policies) function as standards or procedures to be used when configuring or maintaining systems.", "SysSPs can be separated into two general groups, managerial guidance SysSPs and technical specifications SysSPs.", "Systems-specific policies can be developed at the same time as ISSPs, or they can be prepared in advance of their related ISSPs.", "Technical specifications SysSP expresses management's intent for the acquisition, implementation, configuration, and management of a particular technology, written from a business perspective."],
    correctAnswer: ["Technical specifications SysSP expresses management's intent for the acquisition, implementation, configuration, and management of a particular technology, written from a business perspective."],
    type: "single"
  },
  {
    id: 46,
    week: 5,
    question: "________ consists of details about user access permissions and privileges for an organizational asset or resource, such as a file storage system, software component, or network communications device, and focuses on the assets and the users who can access and use them.",
    options: ["Access Control List", "Capabilities Table", "Configuration rules", "User Policies"],
    correctAnswer: ["Access Control List"],
    type: "single"
  },
  {
    id: 47,
    week: 5,
    question: "True or False:\n\nCapability Tables combines the information in Access Control Lists and Access Control Matrix.",
    options: ["True", "False"],
    correctAnswer: ["False"],
    type: "single"
  },
  {
    id: 48,
    week: 5,
    question: "________ govern how a security system reacts to the data it receives.",
    options: ["User Policies", "Configuration Rules", "Access Control Lists", "File Integrity Baselines"],
    correctAnswer: ["Configuration Rules"],
    type: "single"
  },
  {
    id: 49,
    week: 5,
    question: "Which of the following most accurately distinguishes cyber hygiene from cybersecurity?",
    options: ["Cyber hygiene is hardware-focused, while cybersecurity is software-focused.", "Cyber hygiene is reactive in nature, while cybersecurity is always proactive.", "Cyber hygiene involves routine practices for maintaining digital health, whereas cybersecurity encompasses broader strategies, technologies, and incident response.", "Cyber hygiene focuses only on personal devices, while cybersecurity is limited to organizations."],
    correctAnswer: ["Cyber hygiene involves routine practices for maintaining digital health, whereas cybersecurity encompasses broader strategies, technologies, and incident response."],
    type: "single"
  },
  {
    id: 50,
    week: 5,
    question: "________ is an organizational policy that offers detailed, targeted guidance to all members of the organization regarding the use of a resource, such as a process or technology.",
    options: ["Systems-specific security policy", "General or security program policy", "Enterprise information security policy", "Issue-specific security policy"],
    correctAnswer: ["Issue-specific security policy"],
    type: "single"
  },
  {
    id: 51,
    week: 6,
    question: "Match the following:\n\n1. Risk Assessment\n2. Risk Identification\n3. Risk Management\n4. Risk Control\n\na. The process of identifying risk, assessing its relative magnitude, and taking steps to reduce it to an acceptable level.\nb. The recognition, enumeration, and documentation of risks to an organization's information assets.\nc. The implementation of safeguards that reduce the risks to an organization's information assets to an acceptable level.\nd. A determination of the extent to which an organization's information assets are exposed to risk.",
    options: ["1-a, 2-d, 3-c, 4-b", "1-d, 2-a, 3-b, 4-c", "1-d, 2-b, 3-a, 4-c", "1-b, 2-a, 3-d, 4-c"],
    correctAnswer: ["1-d, 2-b, 3-a, 4-c"],
    type: "single"
  },
  {
    id: 52,
    week: 6,
    question: "The risk that remains after the risk management process has concluded is a combined function of:",
    options: ["(1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability less the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards.", "(1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability plus the effect of vulnerability-reducing safeguards.", "(1) a threat plus the effect of threat-reducing safeguards.", "(1) a threat plus the effect of threat-reducing safeguards (Option D)."],
    correctAnswer: ["(1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability less the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards."],
    type: "single"
  },
  {
    id: 53,
    week: 6,
    question: "Which of the following is not a component of Risk Assessment?",
    options: ["Determine Loss Frequency", "Specify Asset Vulnerabilities", "Calculate Risk", "Assess Risk Acceptability"],
    correctAnswer: ["Specify Asset Vulnerabilities"],
    type: "single"
  },
  {
    id: 54,
    week: 6,
    question: "________ is the quantity and nature of risk that organizations are willing to accept as they evaluate the trade-offs between perfect security and unlimited accessibility.",
    options: ["Residual risk", "Risk appetite", "Loss magnitude", "Loss frequency"],
    correctAnswer: ["Risk appetite"],
    type: "single"
  },
  {
    id: 55,
    week: 6,
    question: "Which of the following are the components of risk identification?\n(Select all that apply. More than one answer may be possible.)",
    options: ["Identify, Inventory, & Categorize Assets", "Evaluate Loss Magnitude", "Classify, Value, & Prioritize Assets", "Specify Asset Vulnerabilities"],
    correctAnswer: ["Identify, Inventory, & Categorize Assets", "Classify, Value, & Prioritize Assets", "Specify Asset Vulnerabilities"],
    type: "multiple"
  },
  {
    id: 56,
    week: 6,
    question: "The classification scheme used by the U.S. Classified National Security Information (NSI) system to information, the unauthorized disclosure of which reasonably could be expected to cause serious damage to the national security that the original classification authority is able to identify or describe.",
    options: ["Top Secret", "Secret", "Confidential", "Internal"],
    correctAnswer: ["Secret"],
    type: "single"
  },
  {
    id: 57,
    week: 6,
    question: "Match the following threats with examples:\n\nThreats:\n1. Espionage or trespass\n2. Sabotage or vandalism\n3. Information extortion\n4. Theft\n\nExamples:\na. Damage to or destruction of systems or information\nb. Unauthorized access and/or data collection\nc. Illegal confiscation of equipment or information\nd. Blackmail threat of information disclosure",
    options: ["1-c, 2-a, 3-b, 4-d", "1-b, 2-a, 3-d, 4-c", "1-c, 2-d, 3-b, 4-b", "1-b, 2-d, 3-a, 4-d"],
    correctAnswer: ["1-b, 2-a, 3-d, 4-c"],
    type: "single"
  },
  {
    id: 58,
    week: 6,
    question: "An attacker bypasses or compromises a router, gains access to an organization's network, and encrypts critical data, demanding payment in exchange for the decryption key. This scenario is best classified as:",
    options: ["Information extortion", "Sabotage or vandalism", "Espionage or trespass", "Software attacks"],
    correctAnswer: ["Information extortion"],
    type: "single"
  },
  {
    id: 59,
    week: 6,
    question: "An organization's Hospital Electronic Health Record (EHR) System (Asset A) has an asset value of 50 on a scale of 0–100. Industry reports indicate a 10% probability of a cyberattack in a given year. Based on current vulnerabilities and protection mechanisms, the attack has a 50% probability of success if attempted. Information security analysts estimate that a successful attack would result in a 100% loss of the EHR system's value. The assumptions and data used in the analysis are considered 90% accurate, and the resulting risk value should be adjusted by adding the 10% uncertainty.\n\nUsing the formula:\n\nRisk = (Loss Frequency × Loss Magnitude) + Uncertainty Term\n\nWhat is the risk score for Asset A?",
    options: ["2.25", "2.5", "2.75", "5"],
    correctAnswer: ["2.75"],
    type: "single"
  },
  {
    id: 60,
    week: 6,
    question: "True or False:\n\nThe goal of risk assessment is to assign a risk rating or score that represents the relative risk for a specific vulnerability of an information asset.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 61,
    week: 7,
    question: "Which of the following statements correctly describes the processor protection ring model?",
    options: [
      "User programs execute in Ring 0 because they require maximum privileges.",
      "Ring 3 is the most privileged ring used by the operating system.",
      "The kernel executes in the highest privilege level, and no software is more privileged than the kernel.",
      "All four protection rings are equally privileged."
    ],
    correctAnswer: ["The kernel executes in the highest privilege level, and no software is more privileged than the kernel."],
    type: "single"
  },
  {
    id: 62,
    week: 7,
    question: "Which of the following is not true with respect to Public-Key Encryption?",
    options: [
      "One algorithm is used for encryption and decryption with a pair of keys, one for encryption and one for decryption.",
      "The sender and receiver must each have one of the matched pair of keys.",
      "One of the two keys must be kept secret.",
      "The sender and receiver must share the algorithm and the key."
    ],
    correctAnswer: ["The sender and receiver must share the algorithm and the key."],
    type: "single"
  },
  {
    id: 63,
    week: 7,
    question: "Which of the following statements are true? (Select all that apply. More than one answer may be possible.)",
    options: [
      "A hash function maps a variable-length message into a fixed-length hash value, or message digest.",
      "Hash functions can be used for intrusion detection and virus detection.",
      "The compression function used in secure hash algorithms falls into one of two categories: a function based on a public-key cryptographic algorithm or an algorithm based on a stream cipher.",
      "A cryptographic hash function can be used to construct a pseudorandom function (PRF) or a pseudorandom number generator (PRNG)."
    ],
    correctAnswer: [
      "A hash function maps a variable-length message into a fixed-length hash value, or message digest.",
      "Hash functions can be used for intrusion detection and virus detection.",
      "A cryptographic hash function can be used to construct a pseudorandom function (PRF) or a pseudorandom number generator (PRNG)."
    ],
    type: "multiple"
  },
  {
    id: 64,
    week: 7,
    question: "HTTPS refers to the combination of ______ and ______ to implement secure communication between a Web browser and a Web server.",
    options: ["HTTP, SSL", "HTTP, SSH", "UDP, TCP", "TCP, SSL"],
    correctAnswer: ["HTTP, SSL"],
    type: "single"
  },
  {
    id: 65,
    week: 7,
    question: "________ is the principle that an individual is entrusted to safeguard and control equipment, keying material, and information and is answerable to the proper authority for their loss or misuse, whereas ________ is the principle that ensures actions and events can be traced and reviewed through appropriate records and evidence.",
    options: [
      "Auditability, Accountability",
      "Accountability, Auditability",
      "Confidentiality, Auditability",
      "Responsibility, Accountability"
    ],
    correctAnswer: ["Accountability, Auditability"],
    type: "single"
  },
  {
    id: 66,
    week: 7,
    question: "Match the following:\n\n1. Stateful Inspection Firewall\n2. Packet Filters\n3. Proxy Firewalls\n4. Next Generation Firewalls\n\nDescriptions:\na. Examine individual data packets, making decisions to allow or block them based on predefined rules.\nb. Serves as the gateway from one network to another for a specific application.\nc. Allows or blocks traffic based on state, port, and protocol.\nd. Combines traditional stateful firewall functions with application awareness and control, integrated intrusion prevention, advanced threat detection, and user identity awareness.",
    options: [
      "1-c, 2-a, 3-b, 4-d",
      "1-b, 2-c, 3-b, 4-d",
      "1-c, 2-b, 3-a, 4-d",
      "1-b, 2-c, 3-b, 4-a"
    ],
    correctAnswer: ["1-c, 2-a, 3-b, 4-d"],
    type: "single"
  },
  {
    id: 67,
    week: 7,
    question: "______ masks your Internet Protocol (IP) address, creating a private connection from a public Wi-Fi connection.",
    options: ["IPSEC", "SSL", "VPN", "DNS"],
    correctAnswer: ["VPN"],
    type: "single"
  },
  {
    id: 68,
    week: 7,
    question: "Match the following:\n\n1. Reconnaissance\n2. Exploitation\n3. Weaponization\n4. Command and Control\n\nDescriptions:\na. Creating a malicious payload or malware tailored to the target.\nb. Establishing a remote communication channel to control the compromised system.\nc. Triggering the code to breach the system vulnerability.\nd. Gathering target data, scanning networks, and finding weak spots.",
    options: [
      "1-c, 2-a, 3-b, 4-d",
      "1-d, 2-c, 3-a, 4-b",
      "1-d, 2-a, 3-c, 4-b",
      "1-b, 2-d, 3-a, 4-d"
    ],
    correctAnswer: ["1-d, 2-a, 3-c, 4-b"],
    type: "single"
  },
  {
    id: 69,
    week: 7,
    question: "The following figure depicts which attack?",
    options: ["DDOS", "Brute Force Attack", "Session Hijacking", "DNS Spoofing"],
    correctAnswer: ["DDOS"],
    type: "single",
    imageUrl: "/ddos-attack.svg"
  },
  {
    id: 70,
    week: 7,
    question: "Which of the following is the primary function of a SIEM system?",
    options: [
      "Encrypting all network traffic",
      "Collecting, correlating, and analyzing security logs and events",
      "Blocking all unauthorized websites",
      "Performing software vulnerability scanning"
    ],
    correctAnswer: ["Collecting, correlating, and analyzing security logs and events"],
    type: "single"
  },
  // WEEK 8
  {
    id: 71,
    week: 8,
    question: "Which of the following statements is not true?",
    options: [
      "Risk management involves three major undertakings: risk identification, risk assessment, and risk control.",
      "Risk assessment is the process of identifying risk, assessing its relative magnitude, and taking steps to reduce it to an acceptable level.",
      "Risk identification is the recognition, enumeration, and documentation of risks to an organization's information assets.",
      "Risk identification also involves classifying, valuing, and prioritizing assets."
    ],
    correctAnswer: ["Risk assessment is the process of identifying risk, assessing its relative magnitude, and taking steps to reduce it to an acceptable level."],
    type: "single"
  },
  {
    id: 72,
    week: 8,
    question: "________ is the quantity and nature of risk that an organization is willing to accept while balancing security requirements against business needs such as accessibility and usability.",
    options: [
      "Risk appetite",
      "Risk exposure",
      "Residual risk",
      "Risk capacity"
    ],
    correctAnswer: ["Risk appetite"],
    type: "single"
  },
  {
    id: 73,
    week: 8,
    question: "True or False:\n\nResidual risk is a combined function of (1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability less the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 74,
    week: 8,
    question: "An organization estimates that a data breach would result in a Single Loss Expectancy (SLE) of ₹8,00,000. The Annualized Loss Expectancy (ALE) is estimated to be ₹12,00,000. What is the Annualized Rate of Occurrence (ARO)?",
    options: ["0.5", "1.0", "1.5", "2.0"],
    correctAnswer: ["1.5"],
    type: "single"
  },
  {
    id: 75,
    week: 8,
    question: "An organization's critical server has an Asset Value (AV) of ₹15,00,000 and an Exposure Factor (EF) of 40%. The threat is expected to occur 2 times per year. What is the Annualized Loss Expectancy (ALE)?",
    options: ["₹6,00,000", "₹12,00,000", "₹20,00,000", "₹30,00,000"],
    correctAnswer: ["₹12,00,000"],
    type: "single"
  },
  {
    id: 76,
    week: 8,
    question: "A company has an Annualized Loss Expectancy (ALE) of ₹20,00,000 before implementing a security safeguard. After implementing the safeguard, the ALE is ₹8,00,000. The Annual Cost of Safeguard (ACS) is ₹3,00,000. What is the Cost-Benefit Estimate (CBE)?",
    options: ["₹5,00,000", "₹8,00,000", "₹9,00,000", "₹12,00,000"],
    correctAnswer: ["₹9,00,000"],
    type: "single"
  },
  {
    id: 77,
    week: 8,
    question: "Identify the biometric error measures represented by the numbered curves/point in the supplied figure.",
    options: [
      "1 – FAR, 2 – FRR, 3 – CER",
      "1 – FRR, 2 – FAR, 3 – CER",
      "1 – FAR, 2 – CER, 3 – FRR",
      "1 – CER, 2 – FAR, 3 – FRR"
    ],
    correctAnswer: ["1 – FAR, 2 – FRR, 3 – CER"],
    type: "single",
    imageUrl: "/biometric-error-rate.svg"
  },
  {
    id: 78,
    week: 8,
    question: "Which of the following correctly distinguishes between identification and authentication?",
    options: [
      "Identification verifies the user's identity using a password, while authentication is the process of claiming an identity using a username.",
      "Identification is the process of claiming an identity, while authentication verifies that the claimed identity is genuine.",
      "Identification determines what resources a user can access, while authentication records the user's activities.",
      "Identification and authentication are two terms used for the same process of verifying a user's identity."
    ],
    correctAnswer: ["Identification is the process of claiming an identity, while authentication verifies that the claimed identity is genuine."],
    type: "single"
  },
  {
    id: 79,
    week: 8,
    question: "An organization wants to ensure that an employee cannot later deny having approved an electronic purchase order. Which mechanism would be most appropriate?",
    options: [
      "Encrypting the purchase order using the organization's public key.",
      "Generating a cryptographic hash of the purchase order.",
      "Applying a digital signature using the employee's private key.",
      "Storing the purchase order in an access-controlled database."
    ],
    correctAnswer: ["Applying a digital signature using the employee's private key."],
    type: "single"
  },
  {
    id: 80,
    week: 8,
    question: "A user wants to verify that a website's public key actually belongs to the organization operating the website. Which entity is primarily responsible for providing this assurance?",
    options: [
      "Registration Authority (RA)",
      "Certificate Repository",
      "Identity Provider (IdP)",
      "Certificate Authority (CA)"
    ],
    correctAnswer: ["Certificate Authority (CA)"],
    type: "single"
  },

  // WEEK 9
  {
    id: 81,
    week: 9,
    question: "Who first introduced the Fair Information Practice Principles (FIPPs)?",
    options: [
      "The Federal Trade Commission (FTC)",
      "A private industry consortium",
      "The European Union",
      "The US Secretary's Advisory Committee on Automated Personal Data Systems"
    ],
    correctAnswer: ["The US Secretary's Advisory Committee on Automated Personal Data Systems"],
    type: "single"
  },
  {
    id: 82,
    week: 9,
    question: "Who is credited with popularizing \"the right to be let alone\" in American privacy law, and in which year?",
    options: [
      "Alan Westin, 1967",
      "Warren & Brandeis, 1890",
      "Richard Posner, 1975",
      "Aristotle, 4th century BCE"
    ],
    correctAnswer: ["Warren & Brandeis, 1890"],
    type: "single"
  },
  {
    id: 83,
    week: 9,
    question: "Which school of thought holds that privacy has no independent existence and must always be derived from other rights like property or bodily security?",
    options: [
      "Coherentism",
      "Reductionism",
      "Feminist view",
      "Economic view"
    ],
    correctAnswer: ["Reductionism"],
    type: "single"
  },
  {
    id: 84,
    week: 9,
    question: "Which stakeholder in a data ecosystem \"determines the purposes and means of processing personal data,\" termed Data Fiduciary under India's PDP?",
    options: [
      "Data Subject",
      "Controller",
      "Processor",
      "Regulator"
    ],
    correctAnswer: ["Controller"],
    type: "single"
  },
  {
    id: 85,
    week: 9,
    question: "What is the equivalent term for \"Data Subject\" under India's Personal Data Protection framework?",
    options: [
      "Data Fiduciary",
      "Data Processor",
      "Data Principal",
      "Data Controller"
    ],
    correctAnswer: ["Data Principal"],
    type: "single"
  },
  {
    id: 86,
    week: 9,
    question: "Which of the following are among the four dimensions of concern for information privacy? (Select all that apply. More than one answer may be possible.)",
    options: [
      "Concern on Collection",
      "Concern on Unauthorized Access",
      "Concern on Encryption Strength",
      "Concern on Secondary Use"
    ],
    correctAnswer: [
      "Concern on Collection",
      "Concern on Unauthorized Access",
      "Concern on Secondary Use"
    ],
    type: "multiple"
  },
  {
    id: 87,
    week: 9,
    question: "According to Posner's (1975) economic view, when does privacy matter?",
    options: [
      "Always, regardless of cost",
      "Only insofar as it has economic consequences",
      "Never, it is purely a social construct",
      "Only in employer-employee relationships"
    ],
    correctAnswer: ["Only insofar as it has economic consequences"],
    type: "single"
  },
  {
    id: 88,
    week: 9,
    question: "Which era in Westin's (2003) evolution of information privacy is marked by the rise of the Internet, the emergence of Web 2.0, and a major geopolitical event that reshaped information-exchange norms?",
    options: [
      "Privacy Baseline (1945–1960)",
      "1st Era of Privacy (1961–1979)",
      "2nd Era of Privacy (1980–1989)",
      "3rd Era of Privacy (1990–2002)"
    ],
    correctAnswer: ["3rd Era of Privacy (1990–2002)"],
    type: "single"
  },
  {
    id: 89,
    week: 9,
    question: "Alan Westin's 1967 work Privacy and Freedom distinguished \"privacy\" from a related concept concerning personal data. Which pairing correctly reflects that distinction?",
    options: [
      "Privacy is control over exposure to others; informational self-determination is control over disclosure of personal data.",
      "Privacy is a legal right; information privacy is a moral principle.",
      "Privacy applies to individuals; information privacy applies only to institutions.",
      "Privacy is derived from property rights; information privacy is derived from bodily security."
    ],
    correctAnswer: ["Privacy is control over exposure to others; informational self-determination is control over disclosure of personal data."],
    type: "single"
  },
  {
    id: 90,
    week: 9,
    question: "True or False:\n\nCoherentism treats privacy as a right derived from other fundamental rights like property and bodily security.",
    options: ["True", "False"],
    correctAnswer: ["False"],
    type: "single"
  },

  // WEEK 10
  {
    id: 91,
    week: 10,
    question: "True or False:\n\nConfidentiality concerns the externalization of restricted but accurate information to a specific, authorized entity.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  },
  {
    id: 92,
    week: 10,
    question: "Which earlier regulatory framework evolved into the GDPR by 2018?",
    options: [
      "APEC privacy framework",
      "OECD Guidelines",
      "FTC privacy principles",
      "EU Data Protection Directive"
    ],
    correctAnswer: ["EU Data Protection Directive"],
    type: "single"
  },
  {
    id: 93,
    week: 10,
    question: "In the randomization technique for privacy-preserving data mining, what does the data receiver do with the randomized values transmitted by data providers?",
    options: [
      "Discards the noise and reconstructs exact original values",
      "Employs a distribution reconstruction algorithm to estimate the original data distribution",
      "Applies k-anonymity to the randomized values",
      "Encrypts the noise component before use"
    ],
    correctAnswer: ["Employs a distribution reconstruction algorithm to estimate the original data distribution"],
    type: "single"
  },
  {
    id: 94,
    week: 10,
    question: "What does the k-anonymity requirement state about a released dataset?",
    options: [
      "Every record must be fully anonymous with no identifiers at all",
      "Every combination of quasi-identifier values must be indistinctly matched to at least k individuals",
      "At most k attributes can be disclosed per record",
      "Data must be encrypted using a k-bit key"
    ],
    correctAnswer: ["Every combination of quasi-identifier values must be indistinctly matched to at least k individuals"],
    type: "single"
  },
  {
    id: 95,
    week: 10,
    question: "Data that has been de-identified and encrypted, but for which re-identification remains possible using a separate key, is classified under GDPR as:",
    options: [
      "Anonymous data, fully outside GDPR scope",
      "Personal data, still within GDPR scope",
      "Non-personal data once encrypted",
      "Quasi-identifier data"
    ],
    correctAnswer: ["Personal data, still within GDPR scope"],
    type: "single"
  },
  {
    id: 96,
    week: 10,
    question: "Completely removing certain columns and reducing the granularity of others, as part of k-anonymization, describes which two techniques?",
    options: [
      "Suppression and encryption",
      "Generalization and encryption",
      "Suppression and generalization",
      "Randomization and suppression"
    ],
    correctAnswer: ["Suppression and generalization"],
    type: "single"
  },
  {
    id: 97,
    week: 10,
    question: "Which of the following are quasi-identifiers rather than direct identifiers? (Select all that apply. More than one answer may be possible.)",
    options: [
      "ZIP code",
      "Passport / ID card number",
      "Date of birth",
      "Gender"
    ],
    correctAnswer: [
      "ZIP code",
      "Date of birth",
      "Gender"
    ],
    type: "multiple"
  },
  {
    id: 98,
    week: 10,
    question: "Individuals reporting that they value privacy highly, while freely sharing personal data on social media, illustrates which phenomenon?",
    options: [
      "Prioritizing convenience over privacy alone",
      "Unawareness of behavioral impact on privacy",
      "Privacy Paradox",
      "The balance between privacy protection and data sharing"
    ],
    correctAnswer: ["Privacy Paradox"],
    type: "single"
  },
  {
    id: 99,
    week: 10,
    question: "Which statement correctly distinguishes anonymity, secrecy, and transparency?",
    options: [
      "Anonymity is intentional concealment of information; secrecy conceals identity; transparency discloses information about oneself",
      "Anonymity conceals identity; secrecy is intentional concealment of information; transparency discloses information about oneself",
      "Anonymity conceals identity; secrecy discloses information about oneself; transparency is intentional concealment",
      "Anonymity discloses information about oneself; secrecy conceals identity; transparency is intentional concealment"
    ],
    correctAnswer: ["Anonymity conceals identity; secrecy is intentional concealment of information; transparency discloses information about oneself"],
    type: "single"
  },
  {
    id: 100,
    week: 10,
    question: "On an R-U map plotting disclosure risk against data utility, what does the optimal release point represent?",
    options: [
      "None of the above",
      "Utilizing all PII data to extract full value without privacy concerns",
      "Complete elimination of all data privacy risks by fully anonymizing all data",
      "Maximizing data usefulness while maintaining acceptable privacy risk"
    ],
    correctAnswer: ["Maximizing data usefulness while maintaining acceptable privacy risk"],
    type: "single"
  },

  // WEEK 11
  {
    id: 101,
    week: 11,
    question: "Which of the following is not true about personal data as per GDPR?",
    options: [
      "Personal data is any information that relates to an individual who can be directly or indirectly identified.",
      "Names and email addresses are personal data.",
      "Location information, ethnicity, gender, biometric data, religious beliefs, web cookies, and political opinions can also be personal data.",
      "Pseudonymous data is not personal data, even if the individual can be easily re-identified from it."
    ],
    correctAnswer: ["Pseudonymous data is not personal data, even if the individual can be easily re-identified from it."],
    type: "single"
  },
  {
    id: 102,
    week: 11,
    question: "An organization continues to retain personal data even though it is no longer required for the purpose for which it was collected. Which principle is most directly concerned with this situation?",
    options: [
      "Accuracy",
      "Purpose Limitation",
      "Storage Limitation",
      "Accountability"
    ],
    correctAnswer: ["Storage Limitation"],
    type: "single"
  },
  {
    id: 103,
    week: 11,
    question: "Which of the following statements best describes the applicability of the GDPR?",
    options: [
      "GDPR applies only when an organization is physically located in the European Union.",
      "GDPR applies only to organizations that collect names and email addresses.",
      "GDPR can apply to organizations that process personal data, regardless of their location, when the GDPR applies to their processing activities.",
      "GDPR applies only to government organizations that process personal data."
    ],
    correctAnswer: ["GDPR can apply to organizations that process personal data, regardless of their location, when the GDPR applies to their processing activities."],
    type: "single"
  },
  {
    id: 104,
    week: 11,
    question: "A person is in a life-threatening situation, and processing their personal data is necessary to save their life. Which legal basis for processing is most appropriate under GDPR?",
    options: [
      "Consent",
      "Public interest",
      "Contract",
      "Vital interests"
    ],
    correctAnswer: ["Vital interests"],
    type: "single"
  },
  {
    id: 105,
    week: 11,
    question: "In the context of Aadhaar data, who is considered the Data Principal under the DPDP Act?",
    options: [
      "The Unique Identification Authority of India (UIDAI)",
      "The individual to whom the Aadhaar number and related personal data belong",
      "The service provider that uses Aadhaar authentication",
      "The government agency responsible for processing the data"
    ],
    correctAnswer: ["The individual to whom the Aadhaar number and related personal data belong"],
    type: "single"
  },
  {
    id: 106,
    week: 11,
    question: "What is the primary objective of the Digital Personal Data Protection (DPDP) Act, 2023?",
    options: [
      "To give organizations unrestricted authority to process personal data when a legitimate purpose exists.",
      "To balance the right of individuals to protect their personal data with the need to process such data for lawful purposes.",
      "To restrict the processing of digital personal data primarily to government-authorized purposes.",
      "To prioritize the prevention of personal-data processing over its legitimate and lawful use."
    ],
    correctAnswer: ["To balance the right of individuals to protect their personal data with the need to process such data for lawful purposes."],
    type: "single"
  },
  {
    id: 107,
    week: 11,
    question: "According to the Digital Personal Data Protection Act, 2023 (DPDP Act), a person who alone or together with others determines the purpose and means of processing personal data is known as:",
    options: [
      "Data Protection Officer",
      "Data Processor",
      "Data Fiduciary",
      "Consent Manager"
    ],
    correctAnswer: ["Data Fiduciary"],
    type: "single"
  },
  {
    id: 108,
    week: 11,
    question: "The Information Technology Act of India was enacted in which year?",
    options: ["2000", "2020", "2022", "1998"],
    correctAnswer: ["2000"],
    type: "single"
  },
  {
    id: 109,
    week: 11,
    question: "Which of the following correctly identifies the core principles of the Aadhaar technology system?",
    options: [
      "Openness, central storage, security, and data monetization",
      "Data monetization, vendor-neutrality, security, and data analytics",
      "Openness, data monetization, security, and data analytics",
      "Openness, vendor-neutrality, security, and data analytics"
    ],
    correctAnswer: ["Openness, vendor-neutrality, security, and data analytics"],
    type: "single"
  },
  {
    id: 110,
    week: 11,
    question: "True or False:\n\nThe Indian Telegraph Act, 1885, empowered the government to intercept certain communications under specified circumstances.",
    options: ["True", "False"],
    correctAnswer: ["True"],
    type: "single"
  }
];
