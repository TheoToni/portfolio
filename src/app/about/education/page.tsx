import Sidebar from "@/app/components/sidebar";
import ConsoleBox from "@/app/components/ConsoleBox"; // Import the ConsoleBox component

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-13rem)]">
      {/* Corrected currentPage prop */}
      <Sidebar currentPage="/about/education" />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Education</h1>
        {/* Use the ConsoleBox component for education details */}
        <ConsoleBox command="cat history.log" promptPath="~/education">
          ========================================
          <br />
          Institution: [University/College Name]
          <br />
          Degree: [Your Degree, e.g., B.S. in Computer Science]
          <br />
          Graduation Date: [Month, Year]
          <br />
          Relevant Coursework:
          <br />
          &nbsp;&nbsp;- Data Structures & Algorithms
          <br />
          &nbsp;&nbsp;- Web Development Fundamentals
          <br />
          &nbsp;&nbsp;- Database Management
          <br />
          &nbsp;&nbsp;- [Another relevant course]
          <br />
          ========================================
          <br />
          <br />
          Institution: [Previous School/Bootcamp, if any]
          <br />
          Program: [Program Name]
          <br />
          Completion Date: [Month, Year]
          <br />
          Key Skills:
          <br />
          &nbsp;&nbsp;- [Skill 1]
          <br />
          &nbsp;&nbsp;- [Skill 2]
          <br />
          ========================================
        </ConsoleBox>
      </main>
    </div>
  );
}
