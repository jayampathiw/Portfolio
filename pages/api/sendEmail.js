export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Here you would typically use a service to send an email
    // For this example, we'll just log the data and return a success response
    console.log("Received form submission:", { name, email, subject, message });

    // Simulate an email sending process
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return a success response
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
