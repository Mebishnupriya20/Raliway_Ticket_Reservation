# from http.server import HTTPServer
# from router import RailwayRouter
# from database.connection import init_database

# def run_server():
#     init_database()
#     server_address = ("", 8000)
#     httpd = HTTPServer(server_address, RailwayRouter)
#     print("🚀 Server running at http://localhost:8000")
#     httpd.serve_forever()

# if __name__ == "__main__":
#     run_server()
import os
from http.server import ThreadingHTTPServer
from router import RailwayRouter
from database.connection import init_database

def main():
    init_database()
    

    port = int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), RailwayRouter)

    print(f"🚀 Server running at http://localhost:{port}")
    server.serve_forever()


if __name__ == "__main__":
   main()
