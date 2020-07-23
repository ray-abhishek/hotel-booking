from app.main import db

def save_changes(data):
    try:
        db.session.add(data)
        db.session.commit()
    except Exception as e:
        db.session.rollback()

