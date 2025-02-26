from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Example data storage (replace with a database later)
current_order = {
    "shape": None,
    "layers": [],
    "frosting": None,
    "design_frosting": None
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/orders", methods=["GET", "POST"])
def orders():
    if request.method == "POST":
        # Save order data (simplified example)
        current_order["shape"] = request.form.get("shape")
        current_order["layers"] = request.form.getlist("layers")  # Get all layers
        current_order["frosting"] = request.form.get("frosting")
        current_order["design_frosting"] = request.form.get("design_frosting")
        return redirect(url_for("payment"))
    return render_template("orders.html")

@app.route("/payment")
def payment():
    return render_template("payment.html", order=current_order)

if __name__ == "__main__":
    app.run(debug=True)
