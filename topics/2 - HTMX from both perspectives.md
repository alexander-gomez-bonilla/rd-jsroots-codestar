# Comparing HTMX from both a frontend and backend perspective

HTMX is a very recent library, following in the footsteps and "ideals" that jQuery had 15 years ago. I (Bjorn) have personally noticed some interest from backenders into the simplicity that HTMX brings back to frontend development. Where we no longer create complicated REST couplings using JSON, but just serve (templated) HTML from a backend and HTMX switches the HTML in the DOM for you. 

Making a post call? Easy as `hx-post`. 

## Suggestion

Take a look at HTMX, set up a project using Java/Kotlin with some templating engine, and serve HTML directly into your webapp using HTMX. Create a Todo app for example.

Is this useful? Does this make prototyping from a backend perspective easier? Should we consider doing more things like this from a frontend perspective?