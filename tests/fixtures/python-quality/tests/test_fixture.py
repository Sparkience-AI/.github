from foundation_fixture import identity


def test_identity() -> None:
    assert identity("foundation") == "foundation"
