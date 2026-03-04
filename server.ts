import express from "express";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Supabase Client
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, company, message } = req.body;

    if (!supabase) {
      console.error("Supabase not configured");
      return res.status(500).json({ error: "Database not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY." });
    }

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name, email, company, message }]);

      if (error) throw error;

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Error saving contact:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
