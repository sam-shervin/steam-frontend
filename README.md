
# Getting Started with STEAM

STEAM (Satellite Tracking for Evaluation and Analysis of Marinery) is an advanced platform designed to address the growing problem of water pollution by integrating satellite and HAPS data with machine learning. It empowers individuals and communities to detect, report, and collaboratively resolve water issues. STEAM simplifies water pollution monitoring through heatmaps and provides actionable insights to local authorities, making water protection a shared responsibility. This README file offers a comprehensive guide to using STEAM, highlighting its features, functionalities, and setup instructions.

STEAM provides a range of features to enhance the detection, resolution, and collaboration for water pollution management. The **Heatmap Visualization** feature allows users to interactively view pollution data using gradients, with detailed area-specific stats available on hover or click, and sliders to compare before-and-after data over time. The **Complaint Registry** simplifies issue reporting with an intuitive form for submitting details such as location, issue type, and optional photo uploads, while also enabling users to track the status of complaints (Under Review, Pending Action, or Action Taken) transparently. The **Collaborative Action** feature notifies nearby users about reported issues, encourages participation in clean-ups or petitions, and rewards active contributors through badges and leaderboards. Finally, the platform ensures real-world impact by integrating with local authorities and environmental groups, automatically sending verified complaints to municipal offices, activists, or environmentalists for prompt action.


| **Feature**             | **Description**                                                                                     |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| **Heatmap Visualization** | Provides a clear visual representation of water pollution levels using gradients and area-specific statistics. |
| **Complaint Registry**   | Enables users to report issues like pollution or water stagnation through a simple form with tracking options.   |
| **Complaint Status**     | Tracks the progress of complaints, categorized as Under Review, Pending Action, or Action Taken.                  |
| **Collaborative Action** | Notifies nearby users of issues and encourages participation through badges, leaderboards, and community efforts. |
| **Local Authority Integration** | Automates report submissions to municipal authorities, activists, and environmental groups for action.       |
| **Badge System**         | Rewards active users for contributions like issue reporting, signing petitions, and clean-up participation.       |
| **Leaderboards**         | Encourages friendly competition by ranking users based on their environmental contributions.                     |


## Installation

To run STEAM locally, follow these steps:

### Backend (Node.js)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend (Next.js)
1. Navigate back to the root directory:
   ```bash
   cd ..
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## How to Use

To report water pollution issues, go to the "Complaint Registry" page, fill in the required fields such as location and issue type, optionally upload supporting photos, and submit the form. You can track the status of your complaint to ensure transparency and accountability. For visualizing pollution data, explore the heatmap section to view pollution levels interactively. Hover or click on specific areas to access detailed statistics, and use the slider to analyze changes over time. To engage in collaborative action, respond to notifications about nearby issues, participate in clean-up drives or sign petitions, and earn badges or climb the leaderboard for your contributions.

## Contribution Guidelines

Contributions to STEAM are highly encouraged! Follow these steps to contribute:

1. Fork the repository.
2. Clone the forked repository to your local machine:
   ```bash
   git clone https://github.com/syedomar1/STEAM.git
   ```
3. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
4. Make your changes and commit them with descriptive messages:
   ```bash
   git add .
   git commit -m "Add feature description"
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature-name
   ```
6. Create a pull request to the main repository.

## Acknowledgments

STEAM aims to bridge the gap between technology, public awareness, and sustainable solutions for water pollution. Thank you for supporting this mission to protect our most valuable resource.
