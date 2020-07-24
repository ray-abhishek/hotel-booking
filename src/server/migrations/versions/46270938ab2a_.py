"""empty message

Revision ID: 46270938ab2a
Revises: cc3b0f0860d5
Create Date: 2020-07-23 18:46:36.994181

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '46270938ab2a'
down_revision = 'cc3b0f0860d5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('hotels', 'created_at',
               existing_type=mysql.DATETIME(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('hotels', 'created_at',
               existing_type=mysql.DATETIME(),
               nullable=False)
    # ### end Alembic commands ###
